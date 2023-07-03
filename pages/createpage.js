import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader";
import CoffeeInputForm from "../components/CoffeeInputForm";
import CoffeeList from "../components/CoffeeList";
import Footer from "../components/Footer";
import Link from "next/link";
import styled from "styled-components";
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
      <AppHeader>Neue Bohne</AppHeader>
      <CoffeeInputForm onSubmit={addCoffee} formName={"add-coffee"} />
      <Footer />
    </main>
  );
}
