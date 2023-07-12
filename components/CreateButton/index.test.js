import { render, screen } from "@testing-library/react";
import CreateButton2 from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/createpage",
  }),
  push: jest.fn(),
}));

test("should render HomeButton component", () => {
  render(<CreateButton2 />);
  const createButton = screen.getByRole("button");
  expect(createButton).toBeInTheDocument();
});

test("should have correct active and inactive styles", () => {
  render(<CreateButton2 />);
  const createButton = screen.getByRole("button");

  expect(createButton).toHaveStyle(
    "color: #A9A9A9; text-decoration: underline"
  );
});
