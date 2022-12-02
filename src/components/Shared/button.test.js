import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button.js";

it("should render Button with provided title and captures Clicks", (done) => {
  function handleClick() {
    done();
  }
  render(<Button onClickHandler={handleClick} title="Submit" />);
  const node = screen.getByText("Submit");
  fireEvent.click(node);
});

afterEach(cleanup);
