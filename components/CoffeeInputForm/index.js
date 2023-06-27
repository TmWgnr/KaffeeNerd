import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";
import { useRouter } from "next/router";

export default function CoffeeInputForm() {
  const [newCoffee, setNewCoffee] = useState([]);
  const [origins, setOrigins] = useState([""]);
  const router = useRouter();
  const [aroma, setAroma] = useState([]);

  const onAromaChange = (event) => {
    setAroma([event.target.value]);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const arabicaChecked = formData.get("arabica");
    const robustaChecked = formData.get("robusta");
    const fruchtigChecked = formData.get("fruchtig");
    const nussigChecked = formData.get("nussig");

    const originsCleared = origins.filter((oneOrigins) => oneOrigins !== "");
    const sorts = [];

    if (arabicaChecked) {
      sorts.push("arabica");
    }

    if (robustaChecked) {
      sorts.push("robusta");
    }

    if (fruchtigChecked) {
      aroma.push("fruchtig");
    }

    if (nussigChecked) {
      aroma.push("nussig");
    }

    const newCoffeeEntry = {
      id: uid(),
      name: name,
      origins: originsCleared,
      sorts,
      aroma,
    };

    setNewCoffee((prevCoffee) => [...prevCoffee, newCoffeeEntry]);

    coffees.push(newCoffeeEntry);

    router.push(`/listpage/${newCoffeeEntry.id}`);
  };

  return (
    <>
      <StyledContainer>
        <StyledInputForm onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name: <input id="name" name="name" type="input" />
          </label>
          <div>
            {origins.map((oneOrigins, index) => (
              <div key={index}>
                <span>Herkunft:</span>
                <label htmlFor={`oneOrigins-${index}`}></label>
                <input
                  name={`oneOrigins-${index}`}
                  type="input"
                  id={`oneOrigins-${index}`}
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
            <label>
              {" "}
              robusta
              <input type="checkbox" id="robusta" name="robusta" />
            </label>
          </fieldset>
          <fieldset>
            Aroma:
            <label htmlFor="fruchtig">
              beerig/fruchtig
              <input
                type="radio"
                name="aroma"
                value="beerig/fruchtig"
                id="fruchtig"
                checked={aroma[0] === "beerig/fruchtig"}
                onChange={onAromaChange}
              />
            </label>
            <label htmlFor="nussig">
              nussig/schokoladig
              <input
                type="radio"
                name="aroma"
                value="nussig/schokoladig"
                id="nussig"
                checked={aroma[0] === "nussig/schokoladig"}
                onChange={onAromaChange}
              />
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
            sorts={coffee.sorts}
            aroma={coffee.aroma}
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
