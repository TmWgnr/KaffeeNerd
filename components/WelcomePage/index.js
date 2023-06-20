import styled from "styled-components";
import AppHeader from "../AppHeader";
import Link from "next/link";
import Footer from "../Footer";
import ListButton from "../ListButton";

const StyledGreeting = styled.h2`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #333232;
  font-size: 90px;
`;

export default function WelcomePage() {
  return (
    <>
      <AppHeader>KAFFEENERD</AppHeader>
      <StyledGreeting>CIAO!</StyledGreeting>
      <Footer />
    </>
  );
}
