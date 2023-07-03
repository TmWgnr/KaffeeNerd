import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import React from "react";
import AppHeader from "../../../components/AppHeader";
import Footer from "../../../components/Footer";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const {
    data: coffee,
    isLoading,
    error,
  } = useSWR(id ? `/api/coffees/${id}` : null);

  if (!isReady || isLoading || error || !coffee) return <h2>Loading...!!</h2>;

  //   function deleteCoffee() {
  //     console.log('deleted?');
  //   }

  return (
    <>
      <AppHeader>Details</AppHeader>
      <ListItem>
        <StyledContainer>
          <Link href={`/coffees/${id}/edit`} passHref legacyBehavior>
            Edit
          </Link>
          <StyledName>Name:</StyledName>
          <p>{coffee.name}</p>

          <StyledHerkunft>Herkunft:</StyledHerkunft>
          <StyledList>
            {coffee.origins.map((oneOrigin, index) => (
              <StyledListItem key={index}>{oneOrigin}</StyledListItem>
            ))}
          </StyledList>
          <StyledHerkunft>Sorte:</StyledHerkunft>
          <StyledList>
            {coffee.sorts.map((oneSort, index) => (
              <StyledListItem key={index}>{oneSort}</StyledListItem>
            ))}
          </StyledList>
          <StyledHerkunft>Aroma:</StyledHerkunft>
          <StyledList>
            {coffee.aroma.map((oneAroma, index) => (
              <StyledListItem key={index}>{oneAroma}</StyledListItem>
            ))}
          </StyledList>
          <StyledName>Mahlgrad:</StyledName>
          <p>{coffee.grind}</p>
          <StyledName>IN/OUT:</StyledName>
          <p>{coffee.grams}g</p>
          <p>{coffee.milliliters}ml</p>
          <StyledName>Shop:</StyledName>
          <p>{coffee.shop}</p>
        </StyledContainer>
      </ListItem>
      <Footer></Footer>
    </>
  );
}

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

const StyledHerkunft = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 5px;
  list-style: none;
`;
