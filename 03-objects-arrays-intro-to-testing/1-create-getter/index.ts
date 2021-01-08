const createGetter = (field: string): Function => {
  const path = field.split(".");
  return (obj: Object): any => {
    if (!Object.keys(obj).length || !path.length) {
      return undefined;
    }
    return path.reduce((innerObject: Object | string, field: string): any => {
      if (innerObject instanceof Object && innerObject.hasOwnProperty(field)) {
        innerObject = innerObject[field];
      } else {
        innerObject = undefined;
      }
      return innerObject;
    }, obj);
  };
};

export { createGetter };
