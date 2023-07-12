import { render, screen } from "@testing-library/react";
import HomeButton from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
  push: jest.fn(),
}));

test("should render HomeButton component", () => {
  render(<HomeButton />);
  const homeButton = screen.getByRole("button", { name: "Home" });
  expect(homeButton).toBeInTheDocument();
});

test("should have correct active and inactive styles", () => {
  render(<HomeButton />);
  const homeButton = screen.getByRole("button", { name: "Home" });

  expect(homeButton).toHaveStyle("color: #A9A9A9; text-decoration: underline");
});
