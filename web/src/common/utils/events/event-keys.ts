const mappableEventEnums = ["on-menu-open", "on-menu-close"] as const;

const eventKeys = mappableEventEnums.reduce(
  (prev, curr) => {
    prev[curr] = curr;

    return prev;
  },
  {} as Record<(typeof mappableEventEnums)[number], string>
);

export { eventKeys };
