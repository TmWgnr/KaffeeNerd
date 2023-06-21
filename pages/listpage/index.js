import AppHeader from "../../components/AppHeader";
import CoffeeList from "../../components/CoffeeList";
import Footer from "../../components/Footer";

export default function ListPage() {
  return (
    <main>
      <AppHeader>Kaffeesorten</AppHeader>
      <CoffeeList />
      <Footer />
    </main>
  );
}
