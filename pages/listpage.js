import AppHeader from "../components/AppHeader";
import CoffeeList from "../components/CoffeeList";
import CreateButton from "../components/CreateButton";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import EditButton from "../components/EditButton";
import useSWR from "swr";

export default function ListPage() {
  const { data: coffees, isLoading } = useSWR("/api/coffees", {
    fallbackData: [],
  });
  console.log(coffees);

  if (isLoading) {
    return <div>is loading</div>;
  } else {
    return (
      <main>
        <AppHeader>Kaffeesorten</AppHeader>
        <CreateButton />
        <CoffeeList coffees={coffees} />

        <Footer />
      </main>
    );
  }
}
