import caretUpDown from "../assets/sortingSvgs/Up-down.svg";
import caretDown from "../assets/sortingSvgs/Down-2.svg";
import caretUp from "../assets/sortingSvgs/Up-2.svg";

export const tableSortKeys = (key, sortingHandler, sortKey, sortOrder) => {
  if (key !== sortKey) {
    return (
      <img
        onClick={() => sortingHandler(key, "asc")}
        src={caretUpDown}
        alt="CaretUpDown"
        width="auto"
        height="auto"
      />
    );
  }
  if (key === sortKey && sortOrder === "asc") {
    return (
      <img
        onClick={() => sortingHandler(key, "desc")}
        src={caretDown}
        alt="CaretDown"
        width="auto"
        height="auto"
      />
    );
  }
  if (key === sortKey && sortOrder === "desc") {
    return (
      <img
        onClick={() => sortingHandler(key, "asc")}
        src={caretUp}
        alt="CaretUp"
        width="auto"
        height="auto"
      />
    );
  }
};
