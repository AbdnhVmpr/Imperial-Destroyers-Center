import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../index";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(<MockHeader />);
});

it("renders the website title", () => {
  render(<MockHeader />);
  const title = screen.getByText("Imperial Center");
  expect(title).toBeInTheDocument();
});
