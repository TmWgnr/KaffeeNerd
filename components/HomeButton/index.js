import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  color: ${(page) => (page.active ? "#A9A9A9" : "#000000")};
  background-color: transparent;
  border: none;
  width: 100px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  text-decoration: ${(page) => (page.active ? "underline" : "none")};
`;

export default function HomeButton() {
  const router = useRouter();
  const isActive = router.pathname === "/";

  function handleClick() {
    router.push("/");
  }

  return (
    <StyledButton active={isActive} onClick={handleClick}>
      Home
    </StyledButton>
  );
}
