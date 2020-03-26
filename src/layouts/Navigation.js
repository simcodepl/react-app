import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const pages = [
  {
    name: "start",
    path: "/"
  },
  {
    name: "produkty",
    path: "/products"
  },
  {
    name: "kontakt",
    path: "/contact"
  },
  {
    name: "panel admina",
    path: "/admin"
  }
];

const Navigation = () => {
  const menu = pages.map(page => {
    return (
      <li key={page.name}>
        <NavLink to={page.path} exact={page.path === "/"}>
          {page.name}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
