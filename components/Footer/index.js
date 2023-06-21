import styled from "styled-components";
import ListButton from "../ListButton";
import HomeButton from "../HomeButton";

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  visibility: inherit;
  border-top: 1px solid black;
  color: black;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <ListButton />
        <HomeButton />
      </StyledFooter>
    </>
  );
}
