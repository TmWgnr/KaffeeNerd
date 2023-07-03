import React from "react";
import styled from "styled-components";
import EditButton from "../EditButton";
import Link from "next/link";

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

export default function CoffeeCard({
  name,
  origins,
  sorts,
  aroma,
  grind,
  grams,
  milliliters,
  shop,
  id,
}) {
  return (
    <ListItem>
      <StyledContainer>
        <EditButton id={id} />

        <StyledName>Name:</StyledName>
        <p>{name}</p>

        <StyledHerkunft>Herkunft:</StyledHerkunft>
        <StyledList>
          {origins.map((oneOrigin, index) => (
            <StyledListItem key={index}>{oneOrigin}</StyledListItem>
          ))}
        </StyledList>
        <StyledHerkunft>Sorte:</StyledHerkunft>
        <StyledList>
          {sorts.map((oneSort, index) => (
            <StyledListItem key={index}>{oneSort}</StyledListItem>
          ))}
        </StyledList>
        <StyledHerkunft>Aroma:</StyledHerkunft>
        <StyledList>
          {aroma.map((oneAroma, index) => (
            <StyledListItem key={index}>{oneAroma}</StyledListItem>
          ))}
        </StyledList>
        <StyledName>Mahlgrad:</StyledName>
        <p>{grind}</p>
        <StyledName>IN/OUT:</StyledName>
        <p>{grams}g</p>
        <p>{milliliters}ml</p>
        <StyledName>Shop:</StyledName>
        <p>{shop}</p>
      </StyledContainer>
    </ListItem>
  );
}
