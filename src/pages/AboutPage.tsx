import PageShell from "./PageShell";
import About from "../components/About";

export default function AboutPage() {
  return (
    <PageShell eyebrow="The Photographer" title="About">
      <About />
    </PageShell>
  );
}
