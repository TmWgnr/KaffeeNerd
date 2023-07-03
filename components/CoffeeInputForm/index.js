import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

export default function CoffeeInputForm({
  addCoffee,
  formName,

  defaultData,
}) {
  const [origins, setOrigins] = useState([""]);
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

    setCoffeeEntries((prevCoffeeEntries) => [
      ...prevCoffeeEntries,
      newCoffeeEntry,
    ]);

    const response = await fetch("/api/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffeeEntry),
    });

    if (response.ok) {
      mutate();
    }

    router.push("/listpage");
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          name="name"
          type="input"
          maxLength={30}
          defaultValue={defaultData?.name}
          required
        />

        {origins.map((oneOrigins, index) => (
          <div key={index}>
            <Label>Herkunft:</Label>
            <Input
              name={`oneOrigins-${index}`}
              type="input"
              id={`oneOrigins-${index}`}
              onChange={(event) => handleOneOriginsChange(event, index)}
              maxLength={30}
              defaultValue={defaultData?.oneOrigins}
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
          <label htmlFor="arabica">
            arabica
            <Input
              type="checkbox"
              id="robusta"
              name="arabica"
              checked={arabicaChecked}
              onChange={handleArabicaChange}
            />
          </label>
          <label htmlFor="robusta">
            robusta
            <Input
              type="checkbox"
              id="robusta"
              name="robusta"
              checked={robustaChecked}
              onChange={handleRobustaChange}
            />
          </label>
        </div>

        <Label htmlFor="aroma">Aroma:</Label>
        <div>
          <label htmlFor="aroma">
            beerig/fruchtig
            <Input
              type="radio"
              value="beerig/fruchtig"
              id="aroma"
              checked={aroma[0] === "beerig/fruchtig"}
              onChange={onAromaChange}
              defaultValue={defaultData?.aroma}
            />
          </label>
          <label htmlFor="aroma">
            nussig/schokoladig
            <Input
              type="radio"
              value="nussig/schokoladig"
              id="aroma"
              checked={aroma[0] === "nussig/schokoladig"}
              onChange={onAromaChange}
              defaultValue={defaultData?.aroma}
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
          defaultValue={defaultData?.grind}
          required
        />

        <Label htmlFor="inout">IN/OUT:</Label>
        <div>
          <select
            name="inout"
            id="inout"
            value={grams}
            onChange={handleGramsChange}
            required
            defaultValue={defaultData?.grams}
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
            defaultValue={defaultData?.milliliters}
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
        <Input
          id="shop"
          name="shop"
          type="input"
          required
          defaultValue={defaultData?.shop}
        />

        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid()} onSubmit={addCoffee}>
            hinzufügen
          </Button>
          <Button type="reset" onClick={handleResetButton}>
            abbrechen
          </Button>
          {/* <Button
            type="reset"
            onClick={handleResetButton}
            onSubmit={editCoffee}
          >
            {defaultData ? "Update place" : "Add place"}
          </Button> */}
        </ButtonContainer>
      </Form>

      <div>
        {coffeeEntries.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            origins={coffee.origins}
            sorts={coffee.sorts}
            aroma={coffee.aroma}
            grind={coffee.grind}
            grams={coffee.grams}
            milliliters={coffee.milliliters}
            shop={coffee.shop}
          />
        ))}
      </div>
    </FormContainer>
  );
}

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
