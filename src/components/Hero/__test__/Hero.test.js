import { render, screen, cleanup } from "@testing-library/react";
import Hero from "../index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Hero />);
});

it("check website heading", () => {
  render(<Hero />);
  const heading = screen.getByText("Imperial Destroyers Center");

  expect(heading).toBeInTheDocument();
});
