import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import About from "../components/About";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}
