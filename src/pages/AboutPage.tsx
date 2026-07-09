import PageShell from "./PageShell";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <PageShell eyebrow="The Photographer" title="About">
      <About />
    </PageShell>
  );
}
