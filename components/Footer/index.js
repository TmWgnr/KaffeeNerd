import styled from "styled-components";
import ListButton from "../ListButton";
import HomeButton from "../HomeButton";

import CreateButton from "../CreateButton";

const StyledFooter = styled.footer`
  position: fixed;
  background-color: black;
  opacity: 0.7;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <HomeButton />
        <CreateButton />
        <ListButton />
      </StyledFooter>
    </>
  );
}
