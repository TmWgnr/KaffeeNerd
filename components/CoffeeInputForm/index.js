import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";
import { useRouter } from "next/router";

export default function CoffeeInputForm() {
  const [newCoffee, setNewCoffee] = useState([]);
  const [origins, setOrigins] = useState([""]);
  const [aroma, setAroma] = useState([]);
  const [grams, setGrams] = useState("");
  const [milliliters, setMillliliters] = useState("");
  const router = useRouter();

  const handleResetButton = () => {
    const reset = router.push(`/listpage/${coffees.id}`);
  };

  const isFormValid = () => {
    return (
      origins.every((oneOrigins) => oneOrigins !== "") &&
      aroma.length > 0 &&
      grams !== "" &&
      milliliters !== ""
    );
  };

  const handleGramsChange = (event) => {
    setGrams(event.target.value);
  };

  const handleMillilitersChange = (event) => {
    setMillliliters(event.target.value);
  };

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
    const grind = formData.get("grind");
    const shop = formData.get("shop");

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
      grind: grind,
      grams: grams,
      milliliters: milliliters,
      shop: shop,
    };

    setNewCoffee((prevCoffee) => [...prevCoffee, newCoffeeEntry]);

    coffees.push(newCoffeeEntry);

    router.push(`/listpage/${newCoffeeEntry.id}`);
  };

  return (
    <>
      <StyledContainer>
        <StyledInputForm onSubmit={handleSubmit}>
          <LabelContainer>
            <label htmlFor="name">
              Name: <input id="name" name="name" type="input" />
            </label>
          </LabelContainer>
          <LabelContainer>
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
          </LabelContainer>
          <LabelContainer>
            <StyledFieldSet>
              Sorte:
              <StyledCheckboxLabel>
                {" "}
                arabica
                <StyledInput type="checkbox" id="arabica" name="arabica" />
              </StyledCheckboxLabel>
              <StyledCheckboxLabel>
                {" "}
                robusta
                <StyledInput type="checkbox" id="robusta" name="robusta" />
              </StyledCheckboxLabel>
            </StyledFieldSet>
          </LabelContainer>
          <StyledFieldSet>
            <LabelContainer>Aroma:</LabelContainer>
            <StyledRadioLabel htmlFor="fruchtig">
              beerig/fruchtig
              <StyledInput
                type="radio"
                name="aroma"
                value="beerig/fruchtig"
                id="fruchtig"
                checked={aroma[0] === "beerig/fruchtig"}
                onChange={onAromaChange}
              />
            </StyledRadioLabel>
            <StyledRadioLabel htmlFor="nussig">
              nussig/schokoladig
              <StyledInput
                type="radio"
                name="aroma"
                value="nussig/schokoladig"
                id="nussig"
                checked={aroma[0] === "nussig/schokoladig"}
                onChange={onAromaChange}
              />
            </StyledRadioLabel>
          </StyledFieldSet>
          <LabelContainer>
            <label htmlFor="grind">
              Mahlgrad:{" "}
              <StyledInput
                placeholder="nenne deinen Mahlgrad z.B.: 2,6"
                id="grind"
                name="grind"
                type="number"
                step=".1"
              />
            </label>
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="grams">IN/OUT:</label>
            <select id="grams" value={grams} onChange={handleGramsChange}>
              <option value="8">8g</option>
              <option value="9">9g</option>
              <option value="10">10g</option>
              <option value="17">17g</option>
              <option value="18">18g</option>
              <option value="19">19g</option>
            </select>

            <label htmlFor="milliliters"></label>
            <select
              id="milliliters"
              value={milliliters}
              onChange={handleMillilitersChange}
              required
            >
              <option value="22">22ml</option>
              <option value="24">24ml</option>
              <option value="26">26ml</option>
              <option value="42">42ml</option>
              <option value="45">45ml</option>
              <option value="50">50ml</option>
            </select>
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="shop">
              Shop: <input id="shop" name="shop" type="input" />
            </label>
          </LabelContainer>
          <ButtonContainer>
            <StyledButton1 type="submit" disabled={!isFormValid()}>
              hinzufügen
            </StyledButton1>
            <StyledButton2 type="reset" onClick={handleResetButton}>
              abbrechen
            </StyledButton2>
          </ButtonContainer>
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
            grind={coffee.grind}
            grams={coffee.grams}
            milliliters={coffee.milliliters}
          />
        ))}
      </div>
    </>
  );
}

const StyledInputForm = styled.form`
  display: grid;
  gap: 0.3rem;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LabelContainer = styled.div`
  display: grid;
  gap: 0.3rem;
  justify-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledFieldSet = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
`;

const StyledButton1 = styled.button`
  border: 1px solid;
  border-radius: 5px;
  border-color: green;
  align-items: center;
  flex-direction: row;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  color: green;
  background-color: transparent;
`;

const StyledButton2 = styled.button`
  border: 1px solid;
  border-radius: 5px;
  border-color: red;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  color: red;
  background-color: transparent;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;
