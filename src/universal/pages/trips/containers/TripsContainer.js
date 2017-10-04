// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

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
    if (this.props.allTrips === null) this.props.getTrips();
  }
  render() {
    const { allTrips } = this.props;
    return <Trips trips={allTrips} />;
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
