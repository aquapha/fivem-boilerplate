import { router } from "~/common/router/routes";
import { Event } from "~/web-shared/utils/events";
import { queryClient } from "~/common/libs/react-query";

import { eventKeys } from "./event-keys";

const onMenuCloseEvent = new Event({
  name: eventKeys["on-menu-close"],
  onMessage: async () => {
    await queryClient.cancelQueries();
    queryClient.clear();

    router.navigate({
      to: "/",
    });
  },
});

export { onMenuCloseEvent };
