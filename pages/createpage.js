import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader";
import CoffeeInputForm from "../components/CoffeeInputForm";

import Footer from "../components/Footer";

import useSWR from "swr";

export default function CreateCoffeePage() {
  const router = useRouter();
  const { mutate } = useSWR("api/coffees");

  async function addCoffee(coffee) {
    const response = await fetch("/api/coffees", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffee),
    });
    if (response.ok) {
      mutate();
    }
    router.push("/listpage");
  }
  return (
    <main>
      <AppHeader>NEUE BOHNE</AppHeader>

      <CoffeeInputForm addCoffee={addCoffee} formName={"add-coffee"} />
      <Footer />
    </main>
  );
}
