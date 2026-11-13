import Contact from "../../components/shared/Contact";
import Hero from "../../components/shared/Hero";
import ProdukList from "../../components/shared/ProdukList";
import Team from "../../components/shared/Team";

export default function UserHome() {
  return (
    <>
      <Hero />
      <ProdukList limit={3} />
      <Team />
      <Contact />
    </>
  );
}