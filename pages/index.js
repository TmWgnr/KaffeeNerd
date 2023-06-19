import Heading from "../components/Heading";
import CoffeeList from "../components/CoffeeList";
import CoffeeCard from "../components/CoffeeCard";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Heading>KaffeeListe</Heading>
      <CoffeeList />
    </main>
  );
}
