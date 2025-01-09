import { EventBus } from "~/web-shared/utils/events";

import { onMenuOpenEvent } from "./on-menu-open";
import { onMenuCloseEvent } from "./on-menu-close";

const eventBus = new EventBus([onMenuOpenEvent, onMenuCloseEvent]);

export { eventBus };
