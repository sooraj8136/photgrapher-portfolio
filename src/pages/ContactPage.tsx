import PageShell from "./PageShell";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <PageShell eyebrow="Let's Work" title="Contact">
      <ContactForm />
    </PageShell>
  );
}
