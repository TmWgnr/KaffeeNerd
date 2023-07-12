import { render, screen } from "@testing-library/react";
import CoffeeInputForm from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders StyledInput with id=name", () => {
  render(<CoffeeInputForm />);
  const styledInput = screen.getByTestId("name");
  expect(styledInput).toBeInTheDocument();
});
