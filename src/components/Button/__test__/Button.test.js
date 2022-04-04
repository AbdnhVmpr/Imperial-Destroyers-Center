import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Button from "../index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Button />);
});

it("renders its `children` prop as text", () => {
  render(<Button>Default</Button>);
  const button = screen.getByText(/Default/i);
  expect(button).toBeInTheDocument();
});

it("renders a default button style", () => {
  render(<Button>Default</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveClass("btn");
});

it("renders a button with an added style", () => {
  render(<Button className="btn--confirm">Confirm</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveClass("btn--confirm");
});

it("renders a clickable button", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Clickable</Button>);

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it("renders a disabled button", () => {
  const handleClick = jest.fn();
  render(
    <Button disabled onClick={handleClick}>
      Disabled
    </Button>
  );

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
