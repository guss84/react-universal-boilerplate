import Home from "universal/components/Home/Home.js";
import Trips from "universal/pages/trips/containers/TripsContainer.js";

const staticRoutes = {
  routes: [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/trips",
      component: Trips,
      exact: true
    }
  ]
};
export default staticRoutes;
