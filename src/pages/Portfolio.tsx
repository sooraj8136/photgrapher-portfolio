import PageShell from "./PageShell";
import PortfolioGrid from "../components/PortfolioGrid";

export default function Portfolio() {
  return (
    <PageShell eyebrow="Selected Work" title="Portfolio">
      <PortfolioGrid />
    </PageShell>
  );
}
