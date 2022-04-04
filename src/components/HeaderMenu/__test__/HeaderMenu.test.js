import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderMenu from "../index";

const MockHeaderMenu = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
    </BrowserRouter>
  );
};

afterEach(cleanup);

it("renders without crashing", () => {
  render(<MockHeaderMenu />);
});
