import { Navigate } from "@tanstack/react-router";

import { queryClient } from "~/common/libs/react-query";

import { Event, eventTypes } from "../event";

const onMenuCloseEvent = new Event({
  name: eventTypes["on-menu-close"],
  onMessage: async () => {
    await queryClient.cancelQueries();

    Navigate({
      to: "/",
    });
  },
});

export { onMenuCloseEvent };
