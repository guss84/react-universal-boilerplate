// Libraries
import React, { Component, PropTypes } from "react";
import { Route, Redirect } from "react-router";

// Routes
// For Development only
import staticRoutes from "./static.js";

// This is used in production for code splitting via `wepback.config.server.js`
// import * as routes from 'universal/routes/async.js';

// Containers
import AppContainer from "universal/containers/App/AppContainer.js";
// import PrivateRouteContainer from 'universal/containers/PrivateRoute/PrivateRouteContainer.js';
console.log(staticRoutes);

class Routes extends Component {
  render() {
    const { location } = this.props;
    let routes = staticRoutes.routes.map(({ path, component, exact }, i) => (
      <Route key={Math.random() + "ROUTE_"} exact={exact} path={path} component={component} />
    ));
    /* let redirects = staticRoutes.redirects.map(({ from, to, status }, i) => (
      <RedirectWithStatus key={Math.random() + "REDIRECT_"} from={from} to={to} status={status} />
    ));*/
    return (
      <AppContainer>
        <div>
          {routes}
          {/*redirects*/}
        </div>
      </AppContainer>
    );
  }
}

export default Routes;
