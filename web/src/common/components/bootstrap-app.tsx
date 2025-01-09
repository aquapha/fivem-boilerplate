import { Suspense } from "react";
import { Outlet } from "@tanstack/react-router";

import { useEventBusListen } from "~/common/hooks/events";

function BootstrapApp() {
  useEventBusListen();

  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
}

export { BootstrapApp };
