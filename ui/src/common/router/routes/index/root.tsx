import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "../../routes";

const rootEmptyRoute = createRoute({
  path: "/",
  component: () => null,
  getParentRoute: () => rootRoute,
});

export default rootEmptyRoute;
