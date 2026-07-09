import "./ContactForm.css";

export default function Footer() {
  return (
    <footer className="footer footer--standalone">
      <span className="footer__mark">Jack Evans</span>
      <div className="footer__info">
        <span>hello@jackevans.studio</span>
        <span>+44 7700 900 000</span>
        <span>London · Lisbon</span>
      </div>
      <span className="footer__copy">© Jack Evans 2023</span>
    </footer>
  );
}
