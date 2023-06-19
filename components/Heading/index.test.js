import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>KaffeeListe</Heading>);
  const element = screen.getByText("KaffeeListe");
  expect(element).toBeInTheDocument();
});
