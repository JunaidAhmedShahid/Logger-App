import { render, screen } from "@testing-library/react";
import { NoRecordFound } from "./NoRecordFound";

test("It should return not record found element with the given props.", () => {
  render(
    <NoRecordFound
      title="No data found."
      message="Looks like there is not record in the list yet."
    />
  );
  const NoRecordFoundElemTitle = screen.getByText(/No data found./i);
  const NoRecordFoundElemMessage = screen.getByText(
    /Looks like there is not record in the list yet./i
  );
  expect(NoRecordFoundElemTitle).toBeInTheDocument();
  expect(NoRecordFoundElemMessage).toBeInTheDocument();
});
