import styled from "styled-components";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";
import Link from "next/link";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
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
              herkunft={coffee.herkunft}
              sorte={coffee.sorte}
            />
          );
        })}
      </StyledList>
      <Link href="/createpage">Create</Link>
    </>
  );
}
