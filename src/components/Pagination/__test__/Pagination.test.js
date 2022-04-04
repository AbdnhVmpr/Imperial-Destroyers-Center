import { render, screen, cleanup } from "@testing-library/react";
import Pagination from "../index";

const mockedSetPage = jest.fn();

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <Pagination
      loading={true}
      info={{}}
      limit={5}
      page={1}
      setPage={mockedSetPage}
      category=""
    />
  );
});

it("renders only page number", () => {
  render(
    <Pagination
      loading={true}
      info={{}}
      limit={0}
      page={1}
      setPage={mockedSetPage}
      category=""
    />
  );

  const pagination = screen.getByText(/page 1/i);

  expect(pagination).toBeInTheDocument();
});

it("renders full pagination", () => {
  const info = {
    count: 82,
    next: "next_page",
    previous: "previous_page",
  };
  render(
    <Pagination
      loading={false}
      info={info}
      limit={10}
      page={3}
      setPage={mockedSetPage}
      category="planets"
    />
  );

  const pagination = screen.getByText(/3 to 9 of 82 planets/i);
  const buttons = screen.getAllByRole("button");

  expect(pagination).toBeInTheDocument();
  expect(buttons.length).toBe(2);
});

it("renders full pagination with only next button", () => {
  const info = {
    count: 82,
    next: "next_page",
    previous: null,
  };
  render(
    <Pagination
      loading={false}
      info={info}
      limit={10}
      page={1}
      setPage={mockedSetPage}
      category="planets"
    />
  );
  const pagination = screen.getByText(/1 to 9 of 82 planets/i);
  const buttons = screen.getAllByRole("button");
  const next_button_div = screen.getByTestId("next-button-div");

  expect(pagination).toBeInTheDocument();
  expect(buttons.length).toBe(1);
  expect(next_button_div).toHaveClass("next");
});

it("renders full pagination with only previous button", () => {
  const info = {
    count: 82,
    next: null,
    previous: "previous_page",
  };
  render(
    <Pagination
      loading={false}
      info={info}
      limit={10}
      page={9}
      setPage={mockedSetPage}
      category="planets"
    />
  );
  const pagination = screen.getByText(/9 to 9 of 82 planets/i);
  const buttons = screen.getAllByRole("button");
  const next_button_div = screen.getByTestId("previous-button-div");

  expect(pagination).toBeInTheDocument();
  expect(buttons.length).toBe(1);
  expect(next_button_div).toHaveClass("previous");
});
