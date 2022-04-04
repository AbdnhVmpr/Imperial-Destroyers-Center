import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SearchSort from "../index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<SearchSort />);
});

it("should be able to type in input", () => {
  const inputValue = "Tatooine";
  render(<SearchSort searchInputValue={inputValue} />);
  const inputElement = screen.getByPlaceholderText(/search/i);
  fireEvent.change(inputElement, { target: { value: inputValue } });
  expect(inputElement.value).toBe(inputValue);
});
