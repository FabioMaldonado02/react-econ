import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const Imgtag = styled.img`
  width: 20%;
  height: 50%;
  display: inline-block;
  border: 15px solid grey;
`;
const Divtage = styled.div``;
const ProductCard = ({ title, price, description, image }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Imgtag src={image} alt="Product" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
