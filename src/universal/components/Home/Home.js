import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
        </Helmet>
        <strong>Home Page</strong>
      </div>
    );
  }
}

export default Home;
