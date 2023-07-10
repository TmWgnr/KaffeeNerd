import styled from "styled-components";
import CoffeeCard from "../CoffeeCard";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export default function CoffeeList({ coffees }) {
  return (
    <>
      <StyledList>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              id={coffee._id}
              key={coffee._id}
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
