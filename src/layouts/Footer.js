import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
      <div></div>
      <Route
        path="/:page"
        render={props => {
          console.log(props);
          return <p>2 Jesteś na stronie: {props.match.params.page}</p>;
        }}
      />
    </>
  );
};

export default Footer;
