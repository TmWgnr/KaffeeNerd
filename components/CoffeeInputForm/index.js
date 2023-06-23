import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";

export default function CoffeeInputForm() {
  const [newCoffee, setNewCoffee] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);

    const updatedCoffeeList = [
      ...coffees,
      {
        id: uid(),
        name: formData.name,
        herkunft: formData.herkunft,
        sorte: formData.sorte,
      },
    ];
    setNewCoffee(updatedCoffeeList);
    console.log(updatedCoffeeList);
  }

  return (
    <>
      <StyledContainer>
        <StyledInputForm onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name: <input id="name" name="name" type="input" />
          </label>
          <label htmlFor="herkunft">
            Herkunft: <input id="herkunft" name="herkunft" type="input" />
          </label>

          <fieldset>
            Sorte:
            <label>
              {" "}
              arabica
              <input type="checkbox" id="arabica" name="arabica" />
            </label>
          </fieldset>

          <button type="submit">hinzufügen</button>
        </StyledInputForm>
      </StyledContainer>
      <div>
        {newCoffee.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            herkunft={coffee.herkunft}
            sorte={coffee.sorte}
          />
        ))}
      </div>
    </>
  );
}

const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
