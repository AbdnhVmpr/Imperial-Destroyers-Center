import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Section from "../index";

const MockSection = ({ title, description }) => {
  return (
    <BrowserRouter>
      <Section title={title} description={description} />
    </BrowserRouter>
  );
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(<MockSection />);
});

it("renders without with props", () => {
  render(<MockSection title="Planets" description="This is a description" />);
  const title = screen.getByText(/planets/i);
  const description = screen.getByText(/this is a description/i);

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
