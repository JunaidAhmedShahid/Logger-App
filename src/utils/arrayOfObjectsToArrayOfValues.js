export const arrayOfObjectsToArrayOfValues = (objectsArr, key) => {
  // Filtered only if value exist
  const filteredArr = objectsArr.filter((item) => item[key]);

  // Set is used here for return only unique values
  return [...new Set(filteredArr.map((item) => item[key]))];
};
