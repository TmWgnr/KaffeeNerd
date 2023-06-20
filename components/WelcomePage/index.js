import styled from "styled-components";
import AppHeader from "../AppHeader";

const StyledGreeting = styled.h2`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #333232;
  font-size: 90px;
`;

const WelcomePage = () => {
  return (
    <>
      <AppHeader>KAFFEENERD</AppHeader>
      <StyledGreeting>CIAO!</StyledGreeting>
    </>
  );
};

export default WelcomePage;
