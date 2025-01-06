import {
  createRouter,
  createRootRoute,
  createMemoryHistory,
  createBrowserHistory,
} from "@tanstack/react-router";

import rootAppRoute from "./routes/app/root";
import rootEmptyRoute from "./routes/index/root";

import { BootstrapApp } from "../components/bootstrap-app";

const rootRoute = createRootRoute({
  component: BootstrapApp,
});

const routeTree = rootRoute.addChildren([rootEmptyRoute, rootAppRoute]);

const history = import.meta.env.DEV
  ? createBrowserHistory()
  : createMemoryHistory({ initialEntries: ["/"] });

const router = createRouter({
  history,
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router, rootRoute };
