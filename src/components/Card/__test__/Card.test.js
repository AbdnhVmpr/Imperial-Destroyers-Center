import { render, screen, cleanup } from "@testing-library/react";
import Card from "../index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Card />);
});

it("renders props", () => {
  render(
    <Card url="https://swapi.dev/api/planets" name="Planets" category="planets">
      Default
    </Card>
  );

  const name = screen.getByRole("heading");
  const children = screen.getByText(/Default/i);
  expect(name).toHaveTextContent("Planets");
  expect(children).toBeInTheDocument();
});
