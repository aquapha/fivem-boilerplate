import { createRoute } from "@tanstack/react-router";

import AppPage from "~/app/pages/app-page";

import { rootRoute } from "../../routes";

const rootAppRoute = createRoute({
  path: "/app",
  component: AppPage,
  getParentRoute: () => rootRoute,
});

export default rootAppRoute;
