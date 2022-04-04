import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../index";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(<MockFooter />);
});
