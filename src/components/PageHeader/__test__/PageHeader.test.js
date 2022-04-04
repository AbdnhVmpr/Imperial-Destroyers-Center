import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import PageHeader from "../index";

const MockHeaderMenu = ({ category }) => {
  return (
    <BrowserRouter>
      <PageHeader category={category} />
    </BrowserRouter>
  );
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(<MockHeaderMenu />);
});

it("renders without showing the category name", () => {
  render(<MockHeaderMenu category="Planets" />);

  const category = screen.getByText(/planets/i);

  expect(category).not.toBeVisible();
});
