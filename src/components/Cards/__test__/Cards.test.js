import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Cards from "../index";

import { categories } from "../../../data";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Cards />);
});

it("renders with planets category", () => {
  const { planets } = categories;
  render(<Cards filteredData={planets} category="planets" />);

  const name = screen.getByText(/Tatooine/i);
  const climate = screen.getByText(/arid/i);
  const terrain = screen.getByText(/desert/i);
  const population = screen.getByText(/200000/i);

  expect(name).toBeInTheDocument();
  expect(climate).toBeInTheDocument();
  expect(terrain).toBeInTheDocument();
  expect(population).toBeInTheDocument();
});

it("renders with starships category", () => {
  const { starships } = categories;

  render(<Cards filteredData={starships} category="starships" />);

  const name = screen.getByText(/cr90 corvette/i);
  const manufacturer = screen.getByText(/corellian engineering corporation/i);
  const crew = screen.getByText(/30-165/i);
  const cargo_capacity = screen.getByText(/3000000/i);

  expect(name).toBeInTheDocument();
  expect(manufacturer).toBeInTheDocument();
  expect(crew).toBeInTheDocument();
  expect(cargo_capacity).toBeInTheDocument();
});

it("renders with people category", () => {
  const { people } = categories;

  render(<Cards filteredData={people} category="people" />);

  const name = screen.getByText(/luke skywalker/i);
  const height = screen.getByText(/172/i);
  const mass = screen.getByText(/77/i);
  const birth_year = screen.getByText(/19BBY/i);

  expect(name).toBeInTheDocument();
  expect(height).toBeInTheDocument();
  expect(mass).toBeInTheDocument();
  expect(birth_year).toBeInTheDocument();
});

it("renders with vehicles category", () => {
  const { vehicles } = categories;

  render(<Cards filteredData={vehicles} category="vehicles" />);

  const name = screen.getByText(/sand crawler/i);
  const manufacturer = screen.getByText(/corellia Mining Corporation/i);
  const crew = screen.getByText(/46/i);
  const cargo_capacity = screen.getByText(/50000/i);

  expect(name).toBeInTheDocument();
  expect(manufacturer).toBeInTheDocument();
  expect(crew).toBeInTheDocument();
  expect(cargo_capacity).toBeInTheDocument();
});

it("renders with empty data", () => {
  render(<Cards filteredData={[]} category="planets" />);

  const element = screen.getByText(/no data/i);

  expect(element).toBeInTheDocument();
});
