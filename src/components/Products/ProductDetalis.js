import React, { useState } from "react";
import { useParams } from "react-router-dom";
import getProductsRequest from "../../utils/utils";

// Make api call for product
const getProductsRequestId = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

  return [];
};

const ProductDetalis = ({ title, detalis, button, img }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([null]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getProductsRequestId(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.detalis}</h3>
      <img src={product.img} alt="Product Image" />
      <button onClick={button}>Cart</button>
    </div>
  );
};

export default ProductDetalis;
