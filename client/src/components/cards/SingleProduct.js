import React,{useState} from "react";
import { Card ,Select,Button} from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined,PlusOutlined,HeartTwoTone,HeartFilled} from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductCard.scss";
import StarRating from "react-star-ratings";
import { showAverage } from "../../functions/rating";
import RatingModal from "../modal/RatingModal";

const { Meta } = Card;

const SingleProduct = ({ product ,onStarClick,star }) => {
  const {_id, title, description, flavor,images, slug , weight,quantity,price} = product;
  const [count,setCount] = useState(1);

  const handleIncrement = () => {
      setCount(prevCount => prevCount >= quantity ? prevCount : prevCount+1);
  };
  const handleDecrement = () => {
      setCount(prevCount => prevCount <= 1 ? prevCount : prevCount-1);
  }

  return (
    <> 

      <div className="col-md-5" >
        <Carousel style={{height:700}} dynamicHeight={true} showArrows={true} autoPlay infiniteLoop>
          {images && images.map((i) => <img  src={i.url} key={i.public_id} />)}
        </Carousel>       
           
      </div>

      <div className="col-md-4">
        
        <h1 style={{fontSize:18,fontFamily:'Montserrat',fontStyle:"bold"}}>{title}</h1>
          
        
        {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : 'No Rating Yet'}
        <div className="p-3 mt-5 display-10 jumbotron">
            
            📦 Sold & Fulfilled By   
            <br />     
            FitnessDestination.com (Radicura Pharmaceuticals Pvt. Ltd.) - ✓ Brand Authorized
           <br /> <br /> ⚡ Fast Delivery
           <br /> Average time: 1-3 days for Delhi-NCR or 3-5 days rest of India - FREE Delivery on orders ₹350.
            <br /> <br />🛡️ Genuine Products
           <br /> All our products are far from expiry, and procured directly from the brand or authorized importers of the brand.

        
        </div>
        <div className="p-3 mt-3 display-10 jumbotron">            
            
            🎗️ Brand
            <br />
            FitnessDestination:
            Radicura Pharmaceuticals Pvt. Ltd. B-117, Pocket B, Okhla I, Okhla Industrial Area, New Delhi, 110020, India
            <br/> <br />
            🏢 Manufacturer
            <br />
            Fermentis Life Sciences Pvt. Ltd., Plot 41, Sector 8, IMT Manesar, Gurugram 122 051 HR
            Country of Origin: India

        
        </div>
      </div>
      
      <div className="col-md-3">
      <Card hoverable="true" bordered="true">
          <h6>Weights 
          </h6>          
          
          <Select
          name="weight"
          style={{ width: 120 }}
          >
              
              {weight ? weight.map((c) => (
                  <option key={c} value={c}>
                      {c}
                  </option>
              )) : ''}
          </Select>
          <br />
          <h6>Flavors </h6>
          <Select
          name="flavor"
          style={{ width: 180 }}>              
              {flavor ? flavor.map((k) => (
                  <option key={k} value={k}>
                      {k}
                  </option>
              )) : ''}
          </Select> 
          <div className="mt-3">
            <h5 style={{display:'inline'}}>Price :</h5> <h2 style={{display:'inline'}} className="text-danger">₹{price}</h2>
          </div>
          <div className="quantity-input mt-3">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={handleDecrement}>
          &mdash;
        </button>
        <input className="quantity-input__screen" type="text" value={count} readonly />
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={handleIncrement}>
          <PlusOutlined />
        </button>    
        <Button shape="round" danger="true" type="primary" style={{marginLeft:15}}>Add To Cart</Button>      
      </div> 
      <div className="text-danger mt-5">
      <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>, 
      </div>
             
      </Card>
      </div> 
    
    </>
  );
};

export default SingleProduct;
