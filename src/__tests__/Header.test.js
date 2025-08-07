import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  fireEvent.click(screen.getByText(/mode/i));

  expect(onDarkModeClick).toHaveBeenCalled();
});

