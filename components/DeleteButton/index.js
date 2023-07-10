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
      router.push(`/listpage`);
    } catch (error) {
      return { error: error.message };
    }
  }

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertContainer>
            <AlertBox>
              <p>{`Möchtest du ${name} löschen?`}</p>
              <ButtonContainer2>
                <StyledAlertButton
                  onClick={() => {
                    deleteCoffee();
                    onClose();
                  }}
                >
                  Ja, kipp ihn weg!
                </StyledAlertButton>
                <StyledAlertButton onClick={onClose}>
                  Nö, trink ich noch!
                </StyledAlertButton>
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
  border: #000000;
  color: #ffffff;
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
  background-color: #c18050;
  opacity: 0.9;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 80%;
  max-width: 400px;
  color: #ffffff;
`;

const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledAlertButton = styled.button`
  background-color: #000000;
  opacity: 0.9;
  border: none;
  border-radius: 5px;
  color: #d3d3d3;
`;
