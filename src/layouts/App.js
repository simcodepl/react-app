import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from "react-router-dom";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import Page from "../layouts/Page";

class App extends Component {
  tate = {};
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <div id="main">
            <aside>{<Navigation />}</aside>
            <section>{<Page />}</section>
          </div>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
