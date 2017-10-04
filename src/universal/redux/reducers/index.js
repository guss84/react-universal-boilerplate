import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import tripsReducer from "universal/pages/trips/ducks/trips-reducer";
const reducers = combineReducers({
  allTrips: tripsReducer,
  routing: routerReducer
});

export default reducers;
