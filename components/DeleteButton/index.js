import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import { confirmAlert } from "react-confirm-alert";

export default function DeleteButton({ id, name }) {
  const router = useRouter();

  async function deleteCoffee() {
    await fetch(`/api/coffees/${id}`, {
      method: "DELETE",
    });
    router.push(`/`);
  }

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertContainer>
            <AlertBox>
              <p>{`Möchtest du ${name} löschen?`}</p>
              <ButtonContainer2>
                <button
                  onClick={() => {
                    deleteCoffee();
                    onClose();
                  }}
                >
                  Ja, kipp ihn weg!
                </button>
                <button onClick={onClose}>Nö, trink ich noch!</button>
              </ButtonContainer2>
            </AlertBox>
          </AlertContainer>
        );
      },
    });
  };

  return (
    <ButtonContainer>
      <StyledButton type="button" onClick={submit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <rect x="0" y="0" width="20" height="20" fill="none" stroke="none" />
          <path
            fill="currentColor"
            d="M14.526,2H5.474C4.615,2,4,2.615,4,3.474v1.577H3v1h1.474v11.877c0,0.86,0.615,1.474,1.474,1.474h7.053c0.86,0,1.474-0.615,1.474-1.474V5.051H17v-1h-1V3.474C16,2.615,15.385,2,14.526,2z M6,4h8v1H6V4z M13,15H7v-7h6V15z M12,6h-1V5h-1v1H9V5H8v1H7V5H6v1H12V6z"
          />
        </svg>
      </StyledButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: grey;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const AlertBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 80%;
  max-width: 400px;
  background-color: rgba(255, 0, 0, 0.9);
`;

const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
