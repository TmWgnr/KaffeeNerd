import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../../lib/mock-data";
import { useRouter } from "next/router";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  accent-color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`;

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
    return aroma.length > 0;
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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input id="name" name="name" type="input" maxLength={30} required />

        {origins.map((oneOrigins, index) => (
          <div key={index}>
            <Label>Herkunft:</Label>
            <Input
              name={`oneOrigins-${index}`}
              type="input"
              id={`oneOrigins-${index}`}
              value={oneOrigins}
              onChange={(event) => handleOneOriginsChange(event, index)}
              maxLength={30}
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
          </div>
        ))}

        <Label htmlFor="sorts">Sorte:</Label>
        <div>
          <label htmlFor="sorts">
            arabica
            <Input type="checkbox" id="sorts" name="arabica" />
          </label>
          <label htmlFor="sorts">
            robusta
            <Input type="checkbox" id="sorts" name="robusta" />
          </label>
        </div>

        <Label htmlFor="aroma">Aroma:</Label>
        <div>
          <label htmlFor="aroma">
            beerig/fruchtig
            <Input
              type="radio"
              name="fruchtig"
              value="beerig/fruchtig"
              id="aroma"
              checked={aroma[0] === "beerig/fruchtig"}
              onChange={onAromaChange}
            />
          </label>
          <label htmlFor="aroma">
            nussig/schokoladig
            <Input
              type="radio"
              name="nussig"
              value="nussig/schokoladig"
              id="aroma"
              checked={aroma[0] === "nussig/schokoladig"}
              onChange={onAromaChange}
            />
          </label>
        </div>

        <Label htmlFor="grind">Mahlgrad:</Label>
        <Input
          placeholder="nenne deinen Mahlgrad z.B.: 2,6"
          id="grind"
          name="grind"
          type="number"
          max="20.1"
          step=".1"
          required
        />

        <Label htmlFor="inout">IN/OUT:</Label>
        <div>
          <select
            id="inout"
            value={grams}
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
          </select>

          <select
            id="inout"
            value={milliliters}
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
          </select>
        </div>

        <Label htmlFor="shop">Shop:</Label>
        <Input id="shop" name="shop" type="input" required />

        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid()}>
            hinzufügen
          </Button>
          <Button type="reset" onClick={handleResetButton}>
            abbrechen
          </Button>
        </ButtonContainer>
      </Form>

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
    </FormContainer>
  );
}
