// Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Trips from "../components/Trips";

// Actions
import { getTrips } from "../ducks/trips-action";

class TripsContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(getTrips());
  }
  componentDidMount() {
    if (this.props.allTrips.length === 0) this.props.getTrips();
  }
  render() {
    return <Trips trips={this.props.allTrips} />;
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
export { TripsContainer };
export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer);
