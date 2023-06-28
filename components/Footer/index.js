import styled from "styled-components";
import ListButton from "../ListButton";
import HomeButton from "../HomeButton";

const StyledFooter = styled.footer`
  position: fixed;
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
        <ListButton />
        <HomeButton />
      </StyledFooter>
    </>
  );
}
