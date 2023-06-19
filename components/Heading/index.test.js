import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>Kaffeesorten</Heading>);
  const element = screen.getByText("Kaffeesorten");
  expect(element).toBeInTheDocument();
});
