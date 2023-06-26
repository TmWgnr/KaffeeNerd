import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";

export default function CoffeeInputForm() {
  const [newCoffee, setNewCoffee] = useState([]);
  const [origins, setOrigins] = useState([""]);

  const handleOneOriginsAdd = () => {
    setOrigins((prevOrigins) => [...prevOrigins, ""]);
  };

  const handleOneOriginsRemove = (index) => {
    const originsList = [...origins];
    originsList.splice(index, 1);
    setOrigins(originsList);
  };

  const handleOneOriginsChange = (event, index) => {
    const { value: oneOriginsName } = event.target;
    const originsList = [...origins];
    originsList[index] = oneOriginsName;
    setOrigins(originsList);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);
    const originsCleared = origins.filter((oneOrigins) => oneOrigins !== "");
    const updatedCoffeeList = [
      ...coffees,
      {
        id: uid(),
        name: formData.name,
        origins: [...originsCleared],
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
          <div>
            <span>Herkunft:</span>
            {origins.map((oneOrigins, index) => (
              <div key={index}>
                <label htmlFor={`oneOrigins - ${index}`}></label>
                <input
                  name={`oneOrigins - ${index}`}
                  type="input"
                  id={`oneOrigins - ${index}`}
                  value={oneOrigins}
                  onChange={(event) => handleOneOriginsChange(event, index)}
                />

                {origins.length - 1 === index && origins.length < 4 && (
                  <button type="button" onClick={handleOneOriginsAdd}>
                    <span>+</span>
                  </button>
                )}
                {origins.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleOneOriginsRemove(index)}
                  >
                    <span>-</span>
                  </button>
                )}
              </div>
            ))}
          </div>

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
            origins={coffee.origins}
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
