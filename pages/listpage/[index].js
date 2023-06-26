import AppHeader from "../../components/AppHeader";
import CoffeeList from "../../components/CoffeeList";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function ListPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main>
      <AppHeader>Kaffeesorten</AppHeader>
      <CoffeeList />
      <Footer />
    </main>
  );
}
