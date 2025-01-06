import { lazy, Suspense } from "react";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router/routes";
import { QueryClientProvider } from "./libs/react-query";

const TanstackQueryDevtools = !import.meta.env.DEV
  ? () => null
  : lazy(() =>
      import("@tanstack/react-query-devtools").then((mod) => ({
        default: mod.ReactQueryDevtools,
      }))
    );

function Application() {
  return (
    <QueryClientProvider>
      <RouterProvider router={router} />

      <Suspense>
        <TanstackQueryDevtools initialIsOpen={false} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default Application;
