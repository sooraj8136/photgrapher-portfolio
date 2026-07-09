import { useState } from "react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";
import "./ContactForm.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="contact" id="contact">
      <div className="contact__head">
        <SplitText text="Contact" as="h2" className="contact__title" stagger={0.1} />
        {/* <div className="contact__meta">
          <span className="label">Freelance Photographer</span>
        </div> */}
      </div>

      <Reveal className="contact__sub">
        Leave an application for a photoshoot
      </Reveal>

      <form className="contact__form" onSubmit={onSubmit}>
        <Reveal className="field" delay={0.05}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            required
          />
        </Reveal>
        <Reveal className="field" delay={0.12}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={update("email")}
            required
          />
        </Reveal>
        <Reveal className="field" delay={0.19}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 ..."
            value={form.phone}
            onChange={update("phone")}
          />
        </Reveal>

        <Reveal className="contact__submit" delay={0.26}>
          <button type="submit" className="pill pill--solid">
            {sent ? "Sent ✓" : "Submit"}
          </button>
        </Reveal>
      </form>

      {/* <footer className="footer">
        <span className="footer__mark">Jack Evans</span>
        <div className="footer__info">
          <span>hello@jackevans.studio</span>
          <span>+44 7700 900 000</span>
          <span>London · Lisbon</span>
        </div>
        <span className="footer__copy">© Jack Evans 2023</span>
      </footer> */}
    </section>
  );
}
