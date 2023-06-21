import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px 32px;
  margin: 5px 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

export default function HomeButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return <StyledButton onClick={handleClick}>Home</StyledButton>;
}
