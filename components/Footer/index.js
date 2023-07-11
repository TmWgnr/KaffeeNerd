import styled from "styled-components";
import ListButton from "../ListButton";
import HomeButton from "../HomeButton";

import CreateButton from "../CreateButton";

const StyledFooter = styled.footer`
  position: fixed;
  background-color: #d3d3d3;
  opacity: 0.6;
  color: #000000;
  left: 0;
  bottom: 0;
  width: 100%;
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
