import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
`;

export default function CoffeeCard({ name, origins, sorts }) {
  return (
    <ListItem>
      <StyledContainer>
        <p>Name: {name}</p>
        <p>Herkunft:</p>
        <ul>
          {origins.map((oneOrigin, index) => {
            return <li key={index}>{oneOrigin}</li>;
          })}
        </ul>
        <p>Sorte:</p>
        <ul>
          {sorts.map((oneSort, index) => {
            return <li key={index}>{oneSort}</li>;
          })}
        </ul>
      </StyledContainer>
    </ListItem>
  );
}
