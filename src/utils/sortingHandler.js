export const sortingHandler = (arr, sortKey, sortOrder) => {
  return arr.sort((firstObj, secndObj) => {
    if (typeof firstObj[sortKey] === "string") {
      const firstVal = firstObj[sortKey]?.toUpperCase() || "";
      const secondVal = secndObj[sortKey]?.toUpperCase() || "";
      return sortOrder === "asc"
        ? firstVal < secondVal
          ? -1
          : firstVal > secondVal
          ? 1
          : 0
        : firstVal < secondVal
        ? 1
        : firstVal > secondVal
        ? -1
        : 0;
    }
    return sortOrder === "asc"
      ? firstObj[sortKey] - secndObj[sortKey]
      : secndObj[sortKey] - firstObj[sortKey];
  });
};
