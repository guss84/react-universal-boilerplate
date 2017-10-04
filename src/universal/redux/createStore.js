import { createStore, combineReducers, applyMiddleware, compose } from "redux";
//import thunk from "./middleware/thunk";
import thunk from "redux-thunk";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";

import reducers from "./reducers/index.js";

var preloadedState = {};
//const middleware = routerMiddleware(history);
//const enhancers = [applyMiddleware(thunk), applyMiddleware(middleware)];
if (typeof window != "undefined" && window.__INITIAL_STATE__) {
  preloadedState = window.__INITIAL_STATE__;
  delete window.__INITIAL_STATE__;
}
const store = createStore(reducers, preloadedState, applyMiddleware(thunk), applyMiddleware(routerMiddleware));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./reducers", () => {
    const nextReducers = require("./reducers/index.js");
    const rootReducer = combineReducers({
      ...nextReducers,
      router: routerReducer
    });

    store.replaceReducer(rootReducer);
  });
}
export default store;
