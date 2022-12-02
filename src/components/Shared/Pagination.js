import React from "react";
import ReactPaginate from "react-paginate";
import Next from "../../assets/icons/next.svg";
import Prev from "../../assets/icons/prev.svg";

export const Pagination = ({
  pageNumber,
  totalCount,
  itemsPerPage,
  setItemsPerPage,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-between p-4 py-5 flex-wrap gap-4 px-6 border-t-2">
      {totalCount > 10 ? (
        <select
          onChange={(e) => {
            setItemsPerPage(+e.target.value);
            handlePageChange(1);
          }}
          value={itemsPerPage}
          className="bg-transparent border-OlderGray border rounded text-Frei font-normal text-sm px-5 py-2"
        >
          {totalCount > 10 && <option value="10">10</option>}
          {(totalCount > 10 || (totalCount > 10 && totalCount <= 25)) && (
            <option value="25">25</option>
          )}
          {(totalCount > 25 || (totalCount > 25 && totalCount <= 50)) && (
            <option value="50">50</option>
          )}
          {(totalCount > 50 || (totalCount > 50 && totalCount <= 75)) && (
            <option value="75">75</option>
          )}
          {totalCount > 75 && <option value="100">100</option>}
        </select>
      ) : null}
      {Math.ceil(totalCount / itemsPerPage) !== 1 && (
        <div className="reactPagination">
          <ReactPaginate
            className="flex"
            breakLabel="..."
            nextLabel={
              <img
                className="transform-267"
                src={
                  pageNumber === Math.ceil(totalCount / itemsPerPage)
                    ? Prev
                    : Next
                }
                alt={
                  pageNumber === Math.ceil(totalCount / itemsPerPage)
                    ? "Prev"
                    : "Next"
                }
                width="auto"
                height="auto"
              />
            }
            onPageChange={(selected) => {
              handlePageChange(selected);
            }}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(totalCount / itemsPerPage)}
            previousLabel={
              <img
                className="transform-90"
                src={pageNumber > 1 ? Next : Prev}
                alt={pageNumber > 1 ? "Next" : "Prev"}
                width="auto"
                height="auto"
              />
            }
            renderOnZeroPageCount={null}
            forcePage={pageNumber - 1}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
