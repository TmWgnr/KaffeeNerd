import Image from "next/image";
import styled from "styled-components";

const StyledBackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function BackgroundImage() {
  return (
    <div>
      <StyledBackgroundImage src="/KAFFEBOHNE.jpg" alt="espressobeans" />
    </div>
  );
}
