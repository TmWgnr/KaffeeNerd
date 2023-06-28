import styled from "styled-components";
import { useRouter } from "next/router";

export default function CreateButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/createpage");
  }

  return (
    <ButtonContainer>
      <StyledButton type="button" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: grey;
  align-items: center;
`;
