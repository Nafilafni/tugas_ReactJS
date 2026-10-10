import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProdukList from "../components/shared/ProdukList";
import Team from "../components/shared/Team";

export default function Home(){
    return(
        <>
        <Header />
        <Hero />
        <ProdukList limit={3} />
        <Team />
        <Contact />
        <Footer />
   
        </>
    )
}