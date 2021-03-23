const Product = require('../models/product');
const slugify = require('slugify');
const User = require('../models/user');


exports.create = async(req,res) => {
    try {
        req.body.slug = slugify(req.body.title);
        const newProduct = await new Product(req.body).save();
        res.json(newProduct);
    }catch(err) {
        console.log(err);
        //res.status(400).send("Create Product Failed");
        res.status(400).json({
            err:err.message,
        });
    }
};

exports.listAll = async (req,res)  => {
    let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate('category')
    .populate('subs')
    .sort([['createdAt','desc']])
    .exec();
    res.json(products);
};


exports.remove = async (req, res) => {
    try {
      const deleted = await Product.findOneAndRemove({
        slug: req.params.slug,
      }).exec();
      res.json(deleted);
    } catch (err) {
      console.log(err);
      return res.staus(400).send("Product delete failed");
    }
  };

  exports.read = async (req,res) => {
    let result = await Product.findOne({slug : req.params.slug})
    .populate("category")
    .populate("subs")
    .exec()
    res.json(result);

  }
  exports.update = async (req,res) => {
    try {
        const updated = await Product.findOneAndUpdate({slug : req.params.slug},req.body,{new:true}).exec();
        res.json(updated);
    }catch(err) {
        return res.status(400).json({
          err:err.message,
      });
  
    }
  };

  exports.list = async (req,res) => {
    try {
        const {sort,order,limit} = req.body;
        const products = await Product.find({})
        .populate("category")
        .populate("subs")
        .sort([[sort,order]])
        .limit(limit)
        .exec();

        res.json(products);
    }catch(err) {
        console.log(err);
        
    }
  }

  exports.productStar = async (req, res) => {
    const product = await Product.findById(req.params.productId).exec();
    const user = await User.findOne({ email: req.user.email }).exec();
    const { star } = req.body;
  
    // who is updating?
    // check if currently logged in user have already added rating to this product?
    let existingRatingObject = product.ratings.find(
      (ele) => ele.postedBy.toString() === user._id.toString()
    );
  
    // if user haven't left rating yet, push it
    if (existingRatingObject === undefined) {
      let ratingAdded = await Product.findByIdAndUpdate(
        product._id,
        {
          $push: { ratings: { star, postedBy: user._id } },
        },
        { new: true }
      ).exec();
      console.log("ratingAdded", ratingAdded);
      res.json(ratingAdded);
    } else {
      // if user have already left rating, update it
      const ratingUpdated = await Product.updateOne(
        {
          ratings: { $elemMatch: existingRatingObject },
        },
        { $set: { "ratings.$.star": star } },
        { new: true }
      ).exec();
      console.log("ratingUpdated", ratingUpdated);
      res.json(ratingUpdated);
    }
  };

  exports.listRelated = async(req,res) => {
    const product = await Product.findById(req.params.productId).exec();
    const related = await Product.find({
      _id : {$ne : product._id},
      category: product.category,
    }).limit(4)
    .populate("category")
    .populate("subs")
    .populate("postedBy")
    .exec();
    res.json(related);
  };