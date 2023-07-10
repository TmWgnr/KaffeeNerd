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
  margin: 5px 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

export default function ListButton() {
  const router = useRouter();
  console.log(router.pathname);
  const isActive = router.pathname === "/listpage";

  function handleClick() {
    router.push("/listpage");
  }

  return (
    <StyledButton active={isActive} onClick={handleClick}>
      Liste
    </StyledButton>
  );
}
