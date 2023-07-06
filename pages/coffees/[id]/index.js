import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import React from "react";
import AppHeader from "../../../components/AppHeader";
import Footer from "../../../components/Footer";
import EditButton from "../../../components/EditButton";
import DeleteButton from "../../../components/DeleteButton";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: coffee, isLoading, error } = useSWR(`/api/coffees/${id}`);

  if (!isReady || isLoading || error || !coffee) return <h2>Loading...!!</h2>;

  return (
    <StyledContainer>
      <AppHeader>Details</AppHeader>
      <StyledName>{coffee.name}</StyledName>

      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>Herkunft</StyledCategoryLabel>
          {coffee.origins.map((oneOrigin, index) => (
            <StyledParagraph key={index}> {oneOrigin}</StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>Sorte</StyledCategoryLabel>
          {coffee.sorts.map((oneSort, index) => (
            <StyledParagraph key={index}> {oneSort}</StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>Aroma</StyledCategoryLabel>

          {coffee.aroma.map((oneAroma, index) => (
            <StyledParagraph key={index}> {oneAroma}</StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>MAHLGRAD</StyledCategoryLabel>
          <StyledParagraph>{coffee.grind}</StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>IN/OUT</StyledCategoryLabel>
          <StyledParagraph>
            {coffee.grams}g {coffee.milliliters}ml OUT
          </StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>SHOP</StyledCategoryLabel>
          <StyledParagraph>{coffee.shop}</StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <ButtonContainer>
        <EditButton id={id} />
        <DeleteButton id={id} name={name} />
      </ButtonContainer>
    </StyledContainer>
  );
}

const StyledBackground = styled.div`
  background-color: #333333;
`;

const StyledImage = styled.image``;

const StyledContainer = styled.div`
  top: 20%;
  background-color: black;
  opacity: 0.5;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin: 10px 15px 10px 15px;
  padding: 10px;
`;

const StyledName = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: whitesmoke;
  opacity: 0.5;
  border-radius: 8px;
  padding: 1px;
  margin: 1px;
  margin-bottom: 1px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  width: 60%;
  font-weight: bold;
  font-size: 80%;
  color: black;
`;

const StyledCategoryLabel = styled.p`
  margin: 0;
  font-size: 70%;
  color: black;
  align-self: flex-start;
  padding-left: 10px;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: space-around;
`;
