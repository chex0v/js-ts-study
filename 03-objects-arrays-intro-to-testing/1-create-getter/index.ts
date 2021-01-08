const createGetter = (field: string) => {
  const path = field.split(".");
  return (obj: Object) => {
    if (!Object.keys(obj).length || !path.length) {
      return undefined;
    }
    return path.reduce((o: Object | string, field: string): any => {
      if (o instanceof Object && o.hasOwnProperty(field)) {
        o = o[field];
      } else {
        o = undefined;
      }
      return o;
    }, obj);
  };
};

export { createGetter };
