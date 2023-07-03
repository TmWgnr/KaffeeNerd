import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import CoffeeInputForm from "../../../components/CoffeeInputForm/index.js";
import AppHeader from "../../../components/AppHeader/index.js";

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
    router.push(`/coffees/${id}`);
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <AppHeader>Alte Bohne Neuer Wert</AppHeader>
      <Link href={`/coffees/${id}`} passHref legacyBehavior>
        <Link justifyself="start">back</Link>
      </Link>
      <CoffeeInputForm
        editCoffee={editCoffee}
        formName={"edit-coffee"}
        defaultData={coffee}
      />
    </>
  );
}
