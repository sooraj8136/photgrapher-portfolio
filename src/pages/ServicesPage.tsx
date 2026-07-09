import PageShell from "./PageShell";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <PageShell eyebrow="What I Do" title="Services">
      <Services />
      {/* <Footer /> */}
    </PageShell>
  );
}
