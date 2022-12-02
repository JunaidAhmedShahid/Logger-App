import { render, screen } from "@testing-library/react";
import { ReactSelect } from "./ReactSelect";

test("It should return ReactSelect with the given props.", () => {
  render(
    <ReactSelect
      label={"First Name"}
      placeholder={"--select--"}
      required={true}
    />
  );
  const reactSelectFieldLabel = screen.getByText(/First Name/i);
  const reactSelectFieldPlaceHolder = screen.getByText(/First Name/i);
  const requiredNode = screen.getByText("*");
  expect(reactSelectFieldLabel).toBeInTheDocument();
  expect(requiredNode).toBeInTheDocument();
  expect(reactSelectFieldPlaceHolder).toBeInTheDocument();
});
