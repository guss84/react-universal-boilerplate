// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Components
import Trips from "../components/Trips";

// Actions
import { getTrips } from "../ducks/trips-action";

@connect(mapStateToProps, mapDispatchToProps)
class TripsContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(getTrips());
  }
  componentDidMount() {
    if (this.props.allTrips.length === 0) this.props.getTrips();
  }
  render() {
    const { allTrips } = this.props;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>All trip data from New York airport</title>
        </Helmet>
        <Trips trips={allTrips} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    getTrips: () => {
      dispatch(getTrips());
    }
  };
}
export default TripsContainer;
