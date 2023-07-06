import Image from "next/image";
import styled from "styled-components";

const StyledBackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default function BackgroundImage() {
  return (
    <div>
      <StyledBackgroundImage
        src="/kaffeebohne.jpg"
        alt="espressobeans"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
