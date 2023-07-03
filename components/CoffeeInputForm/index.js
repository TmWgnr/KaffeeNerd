import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";
import CoffeeCard from "../CoffeeCard";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

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
              defaultValue={defaultData?.aroma}
              id="aroma"
              checked={aroma[0] === "beerig/fruchtig"}
              onChange={onAromaChange}
            />
          </label>
          <label htmlFor="aroma">
            nussig/schokoladig
            <Input
              type="radio"
              value="nussig/schokoladig"
              defaultValue={defaultData?.aroma}
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
          defaultValue={defaultData?.grind}
          required
        />

        <Label htmlFor="inout">IN/OUT:</Label>
        <div>
          <select
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
          </select>

          <select
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
          <Button type="submit" disabled={!isFormValid()}>
            {defaultData ? "Update coffee" : "hinzufügen"}
          </Button>
          <Button type="reset" onClick={handleResetButton}>
            abbrechen
          </Button>
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
