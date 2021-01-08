const invertObj = (obj: object): object =>
  !obj
    ? undefined
    : Object.fromEntries(Object.entries(obj).map(([key, val]) => [val, key]));

export { invertObj };
