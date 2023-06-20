import AppHeader from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<AppHeader>KAFFEENERD</AppHeader>);
  const element = screen.getByText("KAFFEENERD");
  expect(element).toBeInTheDocument();
});
