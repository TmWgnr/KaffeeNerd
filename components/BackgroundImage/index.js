import Image from "next/image";
import styled from "styled-components";

const URL =
  "https://images.unsplash.com/photo-1616388761741-a5936c6f61f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

const StyledBackground = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const BackgroundImage = () => {
  return (
    <div>
      <StyledBackground
        src={URL}
        alt="espresso-crema extraction from bottomless portafilter"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default BackgroundImage;