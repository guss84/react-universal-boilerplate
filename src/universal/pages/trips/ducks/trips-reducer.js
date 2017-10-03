const tripsReducer = (state = [], action) => {
  switch (action.type) {
    case "TRIPS_HAS_ERRORED":
      return action.hasErrored;
    case "TRIPS_IS_LOADING":
      return action.isLoading;
    case "GET_TRIPS":
      return action.payload;
    case "FETCH_TRIPS_SUCCESS":
      return action.items;
    default:
      return state;
  }
};
export default tripsReducer;
