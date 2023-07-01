import styled from "styled-components";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";
import Link from "next/link";
import EditButton from "../EditButton";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 100px;
`;

export default function CoffeeList() {
  return (
    <>
      <StyledList>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              origins={coffee.origins}
              sorts={coffee.sorts}
              aroma={coffee.aroma}
              grind={coffee.grind}
              grams={coffee.grams}
              milliliters={coffee.milliliters}
              shop={coffee.shop}
            >
              {" "}
            </CoffeeCard>
          );
        })}
      </StyledList>
    </>
  );
}
