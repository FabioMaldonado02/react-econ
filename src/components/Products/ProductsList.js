import React from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
        />
      ))}
    </div>
  );
};

export default ProductsList;
