import { useRouter } from "next/router";
import useSWR from "swr";
import CoffeeInputForm from "../../../components/CoffeeInputForm/index.js";
import AppHeader from "../../../components/AppHeader/index.js";
import Footer from "../../../components/Footer/index.js";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: coffee,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/coffees/${id}`);

  async function editCoffee(coffee) {
    const response = await fetch(`/api/coffees/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffee),
    });
    if (response.ok) {
      mutate();
    }
    router.push(`/listpage`);
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <AppHeader>Alte Bohne Neuer Wert</AppHeader>

      <CoffeeInputForm
        editCoffee={editCoffee}
        formName={"edit-coffee"}
        defaultData={coffee}
      />
      <Footer />
    </>
  );
}
