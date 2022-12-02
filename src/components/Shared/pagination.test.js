import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

test("It should return pagination with given props", () => {
  render(<Pagination pageNumber={1} itemsPerPage={10} totalCount={100} />);
  const itemsPerPage_25 = screen.getByText(/25/i);
  const itemsPerPage_50 = screen.getByText(/50/i);
  const itemsPerPage_75 = screen.getByText(/75/i);
  expect(itemsPerPage_25).toBeInTheDocument();
  expect(itemsPerPage_50).toBeInTheDocument();
  expect(itemsPerPage_75).toBeInTheDocument();
});
