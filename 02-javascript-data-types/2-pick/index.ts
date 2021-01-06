const pick = (obj: Object, ...fields: Array<string | number>): object =>
  Object.entries(obj).reduce((newObj: object, [key, value]) => {
    if (fields.includes(key)) {
      newObj[key] = value;
    }
    return newObj;
  }, {});

export { pick };
