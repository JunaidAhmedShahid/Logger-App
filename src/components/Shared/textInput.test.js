import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

test("It should return input with the given props.", () => {
  render(
    <TextInput
      label={"First Name"}
      Required={true}
      form={{ touched: null, errors: null }}
    />
  );
  const inputFieldLable = screen.getByText(/First Name/i);
  const requiredNode = screen.getByText("*");
  expect(inputFieldLable).toBeInTheDocument();
  expect(requiredNode).toBeInTheDocument();
});
