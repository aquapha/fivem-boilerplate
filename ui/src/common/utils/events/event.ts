import { type z } from "zod";

const mappableEventEnums = ["on-menu-open", "on-menu-close"] as const;

const eventTypes = mappableEventEnums.reduce((prev, curr) => {
  prev[curr] = curr;

  return prev;
}, {} as Record<(typeof mappableEventEnums)[number], string>);

class Event<Data = unknown> {
  public name: string;
  public schema?: z.ZodSchema<Data>;
  public onMessage: (data: Data) => void;

  constructor({ name, schema, onMessage }: Event<Data>) {
    this.name = name;
    this.schema = schema;
    this.onMessage = onMessage;
  }
}

export { Event, eventTypes };
