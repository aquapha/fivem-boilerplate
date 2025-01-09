import { router } from "~/common/router/routes";
import { Event } from "~/web-shared/utils/events";

import { eventKeys } from "./event-keys";

const onMenuOpenEvent = new Event({
  name: eventKeys["on-menu-open"],
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
