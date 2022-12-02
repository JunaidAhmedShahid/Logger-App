import React, { useEffect, useState } from "react";
import { arrayOfObjectsToArrayOfValues } from "../../utils/arrayOfObjectsToArrayOfValues";
import { useSearchParams } from "react-router-dom";
import { useIsFirstMount } from "../../hooks/useIsFirstMount";
import { getSearchedData } from "./logger.helper";
import { sortingHandler } from "../../utils/sortingHandler";
import { NoRecordFound } from "../../components/Shared/NoRecordFound";
import { getMockedData } from "./loggerService";
import { TableHead } from "../../components/Logger/Table/TableHead";
import { TableBody } from "../../components/Logger/Table/TableBody";
import { Filters } from "../../components/Logger/Filters";
import { Loader } from "../../components/Shared/Loader";
import Breadcrumb from "../../components/Shared/BreadCrumb";
import Pagination from "../../components/Shared/Pagination";

const LoggerManager = () => {
  const [searchParams] = useSearchParams();
  const isFirstMount = useIsFirstMount();

  const [loading, setLoading] = useState(false);
  const [querySearchParams, setQuerySearchParams] = useState({});
  const [mockedData, setMockedData] = useState([]);
  const [dropDowns, setDropDowns] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [sortKey, setSortKey] = useState("creationTimestamp");
  const [sortOrder, setSortOrder] = useState("desc");

  const setDropdownOptionsHandler = (data) => {
    setDropDowns({
      ...dropDowns,
      actionTypes: arrayOfObjectsToArrayOfValues(data, "actionType"),
      applicationTypes: arrayOfObjectsToArrayOfValues(data, "applicationType"),
    });
  };

  const setFilteredDataByParams = async (dataForFilter) => {
    const newQuerySearchParams = {};
    // Map searchParams to an object
    for (let entry of searchParams.entries()) {
      newQuerySearchParams[entry[0]] = entry[1];
    }
    setQuerySearchParams(newQuerySearchParams);
    // Check if searchParams are empty
    const isEmpty = Object.values(newQuerySearchParams).every(
      (x) => x === null || x === ""
    );
    // If searchParams are empty then reload mocked data and reset pagination
    if (isEmpty) {
      await loadData();
      if (pageNumber !== 1) setPageNumber(1);
      if (itemsPerPage !== 10) setItemsPerPage(10);
      return;
    }

    const data = getSearchedData(dataForFilter, searchParams);
    // Set dropdowns options accoding to filtered data

    setTotalCount(data?.length);
    setFilteredData(data?.slice(0, 10));
    setMockedData(data);
    if (pageNumber !== 1) setPageNumber(1);
    if (itemsPerPage !== 10) setItemsPerPage(10);
    setLoading(false);
  };

  const loadData = async () => {
    setLoading(true);
    const response = await getMockedData();
    const responseData = response?.data?.result?.auditLog;
    // Initailize states if data found
    if (responseData) {
      setTotalCount(response?.data?.result?.recordsFiltered);
      setMockedData(responseData);
      setDropdownOptionsHandler(responseData);
      setFilteredData(responseData?.slice(0, 10));
    }
    setLoading(false);
  };

  // Load mocked data from API when component mount first Time
  useEffect(() => {
    loadData();

    // CleanUp
    return () => {
      setMockedData([]);
      setFilteredData([]);
      setQuerySearchParams({});
    };
  }, []);

  // Search Handler
  useEffect(() => {
    if (isFirstMount) return;
    setLoading(true);
    setFilteredDataByParams(mockedData);
  }, [searchParams]);

  // Pagination handler
  useEffect(() => {
    if (isFirstMount) return;
    setLoading(true);
    const skip = (pageNumber - 1) * itemsPerPage;
    const newData = mockedData?.slice(skip, skip + itemsPerPage);
    setFilteredData(newData);
    setLoading(false);
  }, [itemsPerPage, pageNumber]);

  // Sorting handler
  useEffect(() => {
    if (isFirstMount || !mockedData?.length) return;
    setLoading(true);
    const sortedData = sortingHandler(mockedData, sortKey, sortOrder);
    const skip = (pageNumber - 1) * itemsPerPage;
    const newData = sortedData?.slice(skip, skip + itemsPerPage);
    setFilteredData(newData);
    setDropdownOptionsHandler(mockedData);
    setLoading(false);
  }, [sortKey, sortOrder]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full mt-5 relative">
      <Breadcrumb />
      {loading && <Loader />}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6">
            <Filters
              dropDowns={dropDowns}
              querySearchParams={querySearchParams}
            />
            <div className="overflow-hidden border-x-2 shadow  md:rounded-lg mb-10">
              <table className="min-w-full divide-y divide-gray-300">
                <TableHead
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                  setSortKey={setSortKey}
                  setSortOrder={setSortOrder}
                />
                {filteredData?.length > 0 && (
                  <TableBody filteredData={filteredData} />
                )}
              </table>
              <Pagination
                pageNumber={pageNumber}
                totalCount={totalCount}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                handlePageChange={(event) => {
                  setPageNumber(event.selected + 1 || 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {filteredData?.length === 0 && (
        <>
          {!loading && (
            <NoRecordFound
              title="No Record Found."
              message="Looks like there is no record in the list yet. Get started by creating a new one."
            />
          )}
        </>
      )}
    </div>
  );
};

export default LoggerManager;

