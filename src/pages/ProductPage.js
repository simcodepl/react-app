import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = props => {
  return (
    <>
      <h1>Product Page</h1>
      <Product id={props.match.params.id} />
      <Link to="/products">powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
