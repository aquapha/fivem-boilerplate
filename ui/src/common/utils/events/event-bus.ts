import { type Event } from "./event";

type EventData<Data = unknown> = {
  name: string;
  payload: Data;
};

class EventBus {
  private eventMap: Map<string, Event> = new Map();

  constructor(events: Event[]) {
    this.eventMap = new Map(events.map((event) => [event.name, event]));
  }

  public listen() {
    window.addEventListener("message", (message) => {
      const eventData = message.data as EventData | null | undefined;

      if (!eventData?.name) {
        return;
      }

      const event = this.eventMap.get(eventData.name);

      if (!event) {
        // eslint-disable-next-line no-console
        console.error(`Event: ${eventData.name} not found`);

        return;
      }

      EventBus.eventHandler(eventData.payload, event);
    });
  }

  private static eventHandler(data: unknown, event: Event) {
    if (event.schema) {
      const results = event.schema.safeParse(data);

      if (results.error) {
        // eslint-disable-next-line no-console
        console.error(`
          Event: ${event.name}
          Error: ${results.error.message}
        `);

        return;
      }

      try {
        event.onMessage(data);
      } catch {
        // eslint-disable-next-line no-console
        console.error(`
          Event: ${event.name}
          Error: Event handler failed
        `);
      }

      return;
    }

    event.onMessage(data);
  }
}

export { EventBus };
