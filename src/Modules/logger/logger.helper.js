export const getSearchedData = (data, searchParams) => {
  const filterCriteria = {};
  const dateFilter = {};
  for (let entry of searchParams.entries()) {
    if (entry[0] === "fromDate" && entry[1]) {
      dateFilter[entry[0]] = new Date(entry[1]);
    } else if (entry[0] === "toDate" && entry[1]) {
      dateFilter[entry[0]] = new Date(entry[1]);
    } else if (entry[1]) {
      filterCriteria[entry[0]] = entry[1];
    }
  }

  return data?.filter((item) => {
    const keys = Object.keys(filterCriteria);
    for (let filterKey of keys) {
      if (item[filterKey] != filterCriteria[filterKey]) return false;
    }
    const itemDate = new Date(item.creationTimestamp);
    if (dateFilter?.fromDate && dateFilter?.toDate) {
      return itemDate >= dateFilter?.fromDate && itemDate <= dateFilter?.toDate;
    } else if (dateFilter?.fromDate) {
      return itemDate >= dateFilter?.fromDate;
    } else if (dateFilter?.toDate) {
      return itemDate <= dateFilter?.toDate;
    }
    return true;
  });
};
