import { EventBus } from "./event-bus";
import { onMenuOpenEvent, onMenuCloseEvent } from "./generic";

const eventBus = new EventBus([onMenuOpenEvent, onMenuCloseEvent]);

export { eventBus };
