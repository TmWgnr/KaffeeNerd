import React from "react";
import { render, screen } from "@testing-library/react";
import CoffeeCard from "../CoffeeCard";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders CoffeeCard component", () => {
  const coffee = {
    name: "Espresso",
    origins: ["Brasilien"],
    sorts: ["arabica"],
    aroma: ["beerig/fruchtig"],
    grind: 2.3,
    grams: 8,
    milliliters: 22,
    shop: "Coffee Shop",
    id: 1,
  };

  render(<CoffeeCard {...coffee} />);

  const coffeeName = screen.getByText("Coffee Shop");
  expect(coffeeName).toBeInTheDocument();
});
