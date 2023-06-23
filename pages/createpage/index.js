import AppHeader from "../../components/AppHeader";
import CoffeeInputForm from "../../components/CoffeeInputForm";
import CoffeeList from "../../components/CoffeeList";
import Footer from "../../components/Footer";

export default function CreatePage() {
  return (
    <main>
      <AppHeader>Neue Bohne</AppHeader>
      <CoffeeInputForm />
      <Footer />
    </main>
  );
}