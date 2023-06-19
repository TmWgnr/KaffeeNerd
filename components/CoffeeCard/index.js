import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 5px;
  border: 1px solid;
  border-radius: 10px;
`;

export default function CoffeeCard({ id, name, herkunft, sorte }) {
  return (
    <ListItem key={id}>
      <div>
        <StyledContainer>
          <p>Name: {name}</p>
          <p>Herkunft: {herkunft}</p>
          <p>Sorte: {sorte}</p>
        </StyledContainer>
      </div>
    </ListItem>
  );
}
