import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { useRouter } from "next/router";

import BackgroundImage from "../BackgroundImage";

export default function CoffeeInputForm({
  addCoffee,
  editCoffee,
  defaultData,
}) {
  const [origins, setOrigins] = useState(defaultData?.origins || [""]);
  const [arabicaChecked, setArabicaChecked] = useState(
    defaultData?.sorts?.includes("arabica") || false
  );
  const [robustaChecked, setRobustaChecked] = useState(
    defaultData?.sorts?.includes("robusta") || false
  );
  const [aroma, setAroma] = useState(defaultData?.aroma || []);
  const [grams, setGrams] = useState(defaultData?.grams || "");
  const [milliliters, setMillliliters] = useState(
    defaultData?.milliliters || ""
  );
  const [coffeeEntries, setCoffeeEntries] = useState([]);

  const router = useRouter();

  const handleResetButton = () => {
    const reset = router.push(`/listpage/`);
  };

  const isFormValid = () => {
    return aroma.length > 0;
  };

  //
  const handleGramsChange = (event) => {
    setGrams(event.target.value);
  };

  const handleMillilitersChange = (event) => {
    setMillliliters(event.target.value);
  };

  const onAromaChange = (event) => {
    setAroma([event.target.value]);
  };

  const handleArabicaChange = (event) => {
    setArabicaChecked(event.target.checked);
  };

  const handleRobustaChange = (event) => {
    setRobustaChecked(event.target.checked);
  };

  const handleOneOriginsAdd = () => {
    setOrigins((prevOrigins) => [...prevOrigins, ""]);
  };

  // remove one Origin inputfield
  const handleOneOriginsRemove = (index) => {
    const originsList = [...origins];
    originsList.splice(index, 1);
    setOrigins(originsList);
  };

  //update value of Origins
  const handleOneOriginsChange = (event, index) => {
    const { value: oneOriginsName } = event.target;
    const originsList = [...origins];
    originsList[index] = oneOriginsName;
    setOrigins(originsList);
  };

  const onSubmit = async (event) => {
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

    const updatedCoffeeEntry = {
      id: defaultData?.id || uid(),
      name: name,
      origins: originsCleared,
      sorts,
      aroma,
      grind: Number(grind),
      grams: Number(grams),
      milliliters: Number(milliliters),
      shop: shop,
    };

    if (defaultData) {
      // Update existing coffee entry
      setCoffeeEntries((prevCoffeeEntries) =>
        prevCoffeeEntries.map((coffee) =>
          coffee.id === defaultData.id ? updatedCoffeeEntry : coffee
        )
      );
      editCoffee(updatedCoffeeEntry);
    } else {
      // Add new coffee entry
      setCoffeeEntries((prevCoffeeEntries) => [
        ...prevCoffeeEntries,
        updatedCoffeeEntry,
      ]);
      addCoffee(updatedCoffeeEntry);
    }
  };

  return (
    <StyledContainer1>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="name">Name:</StyledCategoryLabel>
            <StyledInput
              data-testid="name"
              id="name"
              name="name"
              type="input"
              maxLength={30}
              defaultValue={defaultData?.name}
              required
            />
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel>Herkunft:</StyledCategoryLabel>
            {origins.map((oneOrigins, index) => (
              <div key={index}>
                <StyledInputContainer>
                  <StyledInput1
                    name={`oneOrigins-${index}`}
                    type="input"
                    id={`oneOrigins-${index}`}
                    onChange={(event) => handleOneOriginsChange(event, index)}
                    maxLength={30}
                    defaultValue={defaultData?.origins[index] || ""}
                    required
                  />
                  {origins.length - 1 === index && origins.length < 4 && (
                    <Button type="button" onClick={handleOneOriginsAdd}>
                      <span>+</span>
                    </Button>
                  )}
                  {origins.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => handleOneOriginsRemove(index)}
                    >
                      <span>-</span>
                    </Button>
                  )}
                </StyledInputContainer>
              </div>
            ))}
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="sorts">Sorte:</StyledCategoryLabel>
            <div>
              <StyledCategoryLabel htmlFor="arabica">
                arabica
                <StyledInput
                  type="checkbox"
                  id="robusta"
                  name="arabica"
                  checked={arabicaChecked}
                  onChange={handleArabicaChange}
                />
              </StyledCategoryLabel>

              <StyledCategoryLabel htmlFor="robusta">
                robusta
                <StyledInput
                  type="checkbox"
                  id="robusta"
                  name="robusta"
                  checked={robustaChecked}
                  onChange={handleRobustaChange}
                />
              </StyledCategoryLabel>
            </div>
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="aroma">Aroma:</StyledCategoryLabel>
            <div>
              <StyledCategoryLabel htmlFor="aroma">
                beerig/fruchtig
                <StyledInput
                  type="radio"
                  value="beerig/fruchtig"
                  defaultValue={defaultData?.aroma}
                  id="aroma"
                  checked={aroma[0] === "beerig/fruchtig"}
                  onChange={onAromaChange}
                />
              </StyledCategoryLabel>
              <StyledCategoryLabel htmlFor="aroma">
                nussig/schokoladig
                <StyledInput
                  type="radio"
                  value="nussig/schokoladig"
                  defaultValue={defaultData?.aroma}
                  id="aroma"
                  checked={aroma[0] === "nussig/schokoladig"}
                  onChange={onAromaChange}
                />
              </StyledCategoryLabel>
            </div>
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="grind">Mahlgrad:</StyledCategoryLabel>
            <StyledInput
              placeholder="nenne deinen Mahlgrad z.B.: 2,6"
              id="grind"
              name="grind"
              type="number"
              max="20.1"
              step=".1"
              defaultValue={defaultData?.grind}
              required
            />
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="inout">IN/OUT:</StyledCategoryLabel>
            <div>
              <StyledSelect
                name="inout"
                id="inout"
                value={grams}
                defaultValue={defaultData?.grams}
                onChange={handleGramsChange}
                required
              >
                <option value="">--</option>
                <option value="8">8g</option>
                <option value="9">9g</option>
                <option value="10">10g</option>
                <option value="17">17g</option>
                <option value="18">18g</option>
                <option value="19">19g</option>
              </StyledSelect>

              <StyledSelect
                id="inout"
                value={milliliters}
                defaultValue={defaultData?.milliliters}
                onChange={handleMillilitersChange}
                required
              >
                <option value="">--</option>
                <option value="22">22ml</option>
                <option value="24">24ml</option>
                <option value="26">26ml</option>
                <option value="42">42ml</option>
                <option value="45">45ml</option>
                <option value="50">50ml</option>
              </StyledSelect>
            </div>
          </StyledContainer2>
          <StyledContainer2>
            <StyledCategoryLabel htmlFor="shop">Shop:</StyledCategoryLabel>
            <StyledInput
              id="shop"
              name="shop"
              type="input"
              required
              defaultValue={defaultData?.shop}
            />
          </StyledContainer2>
          <ButtonContainer>
            <Button1 type="submit" disabled={!isFormValid()}>
              {defaultData ? "ändern" : "hinzufügen"}
            </Button1>
            <Button1 type="reset" onClick={handleResetButton}>
              abbrechen
            </Button1>
          </ButtonContainer>
        </form>
      </FormContainer>
      <BackgroundImage />
    </StyledContainer1>
  );
}

const StyledContainer1 = styled.div`
  top: 20%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 10px;
  margin-top: 160px;
  margin-bottom: 50px;
`;

const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d3d3d3;
  opacity: 0.6;
  border-radius: 8px;
  padding: 1px;
  margin: 10px 0px 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 100%;
  font-weight: bold;
  font-size: 80%;
  color: #d3d3d3;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput1 = styled.input`
  margin: 0;
  border-radius: 5px;
  width: 80%;
  border: solid black 1px;
  background-color: #d3d3d3;
  margin: 5px;
  align-items: center;
  flex-grow: 1;
`;

const StyledCategoryLabel = styled.label`
  margin: 0;
  font-size: 70%;
  color: #000000;
  align-self: flex-start;
  padding-left: 10px;
`;

const StyledInput = styled.input`
  margin: 0;
  border-radius: 5px;
  border: solid black 1px;
  background-color: #d3d3d3;
  margin: 5px;
  align-items: center;
  accent-color: black;
`;

const StyledSelect = styled.select`
  margin: 0;
  border-radius: 5px;
  border: solid black 1px;
  background-color: #d3d3d3;
  color: #000000;
  margin: 5px;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 1.5rem;
  margin: 0.3rem 0.3rem 0.2rem 0.3rem;
  background-color: #d3d3d3;
  color: #000000;
  border: none;
  cursor: pointer;
`;

const Button1 = styled.button`
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  color: #d3d3d3;
  opacity: 0.8;
  border: none;
  cursor: pointer;
`;
