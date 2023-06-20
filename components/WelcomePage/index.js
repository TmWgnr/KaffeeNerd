import styled from "styled-components";
import AppHeader from "../AppHeader";
import Link from "next/link";

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
      <Link href="/listpage">hier gehts zur KaffeListe</Link>
    </>
  );
}
