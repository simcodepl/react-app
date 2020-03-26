import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import image1 from "../images/header1.jpg";
import image2 from "../images/header2.jpg";
import image3 from "../images/header3.jpg";

const Header = () => {
  const images = [image1, image2, image3];
  const imageIndex = Math.floor(Math.random() * 3);

  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <img src={image1} alt="" />;
          }}
        />
        <Route
          path="/products"
          render={() => {
            return <img src={image2} alt="" />;
          }}
        />
        <Route
          path="/contact"
          render={() => {
            return <img src={image3} alt="" />;
          }}
        />
        <Route
          path="/admin"
          render={() => {
            return <img src={image1} alt="" />;
          }}
        />
        <Route
          render={() => {
            return <img src={image3} alt="" />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Header;
