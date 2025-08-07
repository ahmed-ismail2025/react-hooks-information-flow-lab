import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  expect(onCategoryChange).toHaveBeenCalledWith("Dairy");
});
