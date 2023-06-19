import styled from "styled-components";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";

const StyledList = styled.ul`
  list-style-type: style none;
  display: flex;
  flex-direction: column;
`;

export default function CoffeeList() {
  return (
    <>
      <StyledList>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.key}
              name={coffee.name}
              herkunft={coffee.herkunft}
              sorte={coffee.sorte}
            />
          );
        })}
      </StyledList>
    </>
  );
}
