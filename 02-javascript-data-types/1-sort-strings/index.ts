enum TypeSort {
  ASC = "asc",
  DESC = "desc",
}

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(
  arr: Array<string>,
  param: TypeSort = TypeSort.ASC
): Array<string> {
  return arr.slice().sort((str1, str2): number => {
    return comparisonСoefficient(param) * compare(str1, str2);
  });
}

const comparisonСoefficient = (param: TypeSort = TypeSort.ASC): number => {
  switch (param) {
    case TypeSort.ASC:
      return 1;
    case TypeSort.DESC:
      return -1;
    default:
      return 0;
  }
};

const compare = (str1, str2): number =>
  str1.localeCompare(str2, ["ru", "en"], { caseFirst: "upper" });
