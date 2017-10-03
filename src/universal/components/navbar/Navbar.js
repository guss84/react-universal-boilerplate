import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header className={styles.navbar}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/trips">Trips</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default Navbar;
