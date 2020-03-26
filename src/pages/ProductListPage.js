import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const products = ["car", "bike", "motorcycle"];
const ProductListPage = () => {
  const productList = products.map(product => {
    return (
      <li key="{product}">
        <Link to={`/products/${product}`}>{product}</Link>
      </li>
    );
  });
  return (
    <>
      <h1>Product List Page</h1>
      <div className="products">
        <ul>{productList}</ul>
      </div>
    </>
  );
};

export default ProductListPage;
