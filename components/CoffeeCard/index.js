import React from "react";
import styled from "styled-components";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
import BackgroundImage from "../BackgroundImage";

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
    <StyledContainer>
      <BackgroundImage />
      <StyledName>{name}</StyledName>

      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>HERKUNFT</StyledCategoryLabel>
          {origins.map((oneOrigin, index) => (
            <StyledParagraph key={`${oneOrigin}-${index}`}>
              {" "}
              {oneOrigin}
            </StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>SORTE</StyledCategoryLabel>
          {sorts.map((oneSort) => (
            <StyledParagraph key={oneSort}> {oneSort}</StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>AROMA</StyledCategoryLabel>

          {aroma.map((oneAroma) => (
            <StyledParagraph key={oneAroma}> {oneAroma}</StyledParagraph>
          ))}
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>MAHLGRAD</StyledCategoryLabel>
          <StyledParagraph>{grind}</StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>gIN/mlOUT</StyledCategoryLabel>
          <StyledParagraph>
            {grams} IN {milliliters} OUT
          </StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <StyledSection>
        <StyledCategory>
          <StyledCategoryLabel>SHOP</StyledCategoryLabel>
          <StyledParagraph>{shop}</StyledParagraph>
        </StyledCategory>
      </StyledSection>
      <ButtonContainer>
        <EditButton id={id} />
        <DeleteButton id={id} name={name} />
      </ButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const StyledName = styled.h1`
  display: flex;
  justify-content: center;
  color: #d3d3d3;
  opacity: 0.7;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #000000;
`;

const StyledCategoryLabel = styled.p`
  margin: 0;
  font-size: 70%;
  color: #000000;
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
  justify-content: space-around;
`;
