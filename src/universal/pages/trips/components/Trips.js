import React, { Component } from "react";
//import { Helmet } from "react-helmet";

class Trips extends Component {
  componentDidMount() {}
  render() {
    const { trips } = this.props;

    return (
      <div>
        <strong>trips</strong>
        <pre>{JSON.stringify(trips, null, 2)}</pre>
      </div>
    );
  }
}

export default Trips;
