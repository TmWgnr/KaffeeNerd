import AppHeader from "../../components/AppHeader";
import CoffeeList from "../../components/CoffeeList";
import CreateButton from "../../components/CreateButton";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import EditButton from "../../components/EditButton";

export default function ListPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main>
      <AppHeader>Kaffeesorten</AppHeader>
      <CoffeeList />

      <CreateButton />
      <Footer />
    </main>
  );
}
