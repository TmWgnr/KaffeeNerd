import AppHeader from "../../components/AppHeader";

import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main>
      <AppHeader>Alte Bohne Neue Info</AppHeader>
      <Footer />
    </main>
  );
}
