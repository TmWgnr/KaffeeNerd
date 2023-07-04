import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import DeleteIcon from "../DeleteIcon";

export default function DeleteButton({ id, name }) {
  const router = useRouter();

  async function deleteCoffee() {
    try {
      await fetch(`/api/coffees/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      return { error: error.message };
    }
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
        <DeleteIcon />
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
