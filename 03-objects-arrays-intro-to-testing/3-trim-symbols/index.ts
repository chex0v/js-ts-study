const trimSymbols = (str: string, count?: number): string => {
  if (count === 0 || str === "") {
    return "";
  }
  if (!count) {
    return str;
  }
  let countEqual = 0;
  let newStr = str[0];
  for (let index = 1; index < str.length; index++) {
    if (str[index - 1] === str[index]) {
      ++countEqual;
    }
    if (countEqual === count) {
      countEqual = 0;
      continue;
    }
    newStr += str[index];
  }
  return newStr;
};

export { trimSymbols };
