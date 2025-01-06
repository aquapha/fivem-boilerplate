import { router } from "~/common/router/routes";

import { Event, eventTypes } from "../event";

const onMenuOpenEvent = new Event({
  name: eventTypes["on-menu-open"],
  onMessage: () => {
    if (router.history.canGoBack()) {
      router.history.back();

      return;
    }

    router.navigate({
      to: "/app",
    });
  },
});

export { onMenuOpenEvent };
