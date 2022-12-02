import { tableSortKeys } from "../../../utils/tableSortKeys";

export const TableHead = ({ sortKey, sortOrder, setSortKey, setSortOrder }) => {
  const getSortingIconJSX = (key) => {
    return tableSortKeys(
      key,
      (key, order) => {
        setSortKey(key);
        setSortOrder(order);
      },
      sortKey,
      sortOrder
    );
  };

  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Log Id {getSortingIconJSX("logId")}{" "}
          </span>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Application Type {getSortingIconJSX("applicationType")}{" "}
          </span>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Application ID{getSortingIconJSX("applicationId")}{" "}
          </span>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Action Type{getSortingIconJSX("actionType")}{" "}
          </span>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Action Details{getSortingIconJSX("actionDetail")}{" "}
          </span>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
        >
          <span className="pl-8  flex gap-3 text-left">
            Created At {getSortingIconJSX("creationTimestamp")}{" "}
          </span>
        </th>
      </tr>
    </thead>
  );
};
