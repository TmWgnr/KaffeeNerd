import styled from "styled-components";
import Heading from "../Heading";

const StyledGreeting = styled.h2`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: grey;
  font-size: 90px;
`;

const WelcomePage = () => {
  return (
    <>
      <Heading />
      <StyledGreeting>CIAO!</StyledGreeting>
    </>
  );
};

export default WelcomePage;
