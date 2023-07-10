import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  background-color: ${(page) => (page.active ? "#d3d3d3" : "#000000")};
  border: solid transparent 1px;
  color: ${(page) => (page.active ? "#000000" : "#d3d3d3")};
  opacity: 0.7;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

export default function CreateButton2() {
  const router = useRouter();
  const isActive = router.pathname === "/createpage";

  function handleClick() {
    router.push("/createpage");
  }

  return (
    <StyledButton active={isActive} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0  20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </StyledButton>
  );
}
