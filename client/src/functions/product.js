import axios from "axios";


export const createProduct = async (product, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      authtoken,
    },
  });


  export const getProductByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/products/${count}`);

  export const removeProduct = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`,  {
    headers: {
      authtoken,
    },
  });

  export const getProduct = async (slug) =>
    await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);

  export const updateProduct = async (slug,product, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/product/${slug}`, product, {
    headers: {
      authtoken,
    },
  });

  export const getProducts = async (sort,order,limit) =>
  await axios.post(`${process.env.REACT_APP_API}/products`, {
    sort,order,limit
  });

  export const productStar = async (productId,star,authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/product/star/${productId}`, {star}, {
    headers: {
      authtoken,
    },
  });

  export const getRelated = async (productId) =>
  await axios.get(`${process.env.REACT_APP_API}/product/related/${productId}`);
