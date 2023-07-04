import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  background-color: black;
  border: 1px solid black;
  color: whitesmoke;
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

  function handleClick() {
    router.push("/listpage/");
  }

  return <StyledButton onClick={handleClick}>Liste</StyledButton>;
}
