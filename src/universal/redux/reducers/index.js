import { combineReducers } from "redux";
import tripsReducer from "universal/pages/trips/ducks/trips-reducer";
const reducers = combineReducers({
  allTrips: tripsReducer
});

export default reducers;
