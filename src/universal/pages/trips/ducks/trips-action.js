import Request from "axios";

export const GET_TRIPS = "GET_TRIPS";
export const TRIPS_HAS_ERRORED = "TRIPS_HAS_ERRORED";
export const TRIPS_IS_LOADING = "TRIPS_IS_LOADING";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";

const ROOT_URL = "http://localhost:8080/api";

export function tripsHasErrored(bool) {
  return {
    type: "TRIPS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function tripsIsLoading(bool) {
  return {
    type: "TRIPS_IS_LOADING",
    isLoading: bool
  };
}

export function fetchTripsSuccess(items) {
  return {
    type: "FETCH_TRIPS_SUCCESS",
    items
  };
}
export function getTrips() {
  return function(dispatch) {
    return getRidesFromAPI().then(res => {
      dispatch(fetchTripsSuccess(res.data));
    });
  };
  /*return async function(dispatch, getState) {
      let { data } = await getRidesFromAPI();
      dispatch({ type: "GET_TRIPS", payload: data });
    };*/
}
function getRidesFromAPI() {
  return Request.get(`${ROOT_URL}/allTrips`);
}
