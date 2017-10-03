import React, { Component, PropTypes } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./App.css";

class App extends Component {
  /*static propTypes = {
    children: PropTypes.element.isRequired
  };*/

  render() {
    return (
      <div className={styles.app}>
        <Navbar className={styles.header} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
