import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import "./About.css";

const PORTRAIT =
  "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=900";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="about" id="about">
      <div className="about__meta">
        <span className="label">Freelance Photographer</span>
        <span className="label">Jack Evans</span>
      </div>

      <div className="about__body">
        <Reveal className="about__portrait">
          <img src={PORTRAIT} alt="Jack Evans portrait" />
        </Reveal>

        <Reveal className="about__text" delay={0.1}>
          <p>
            I'm Jack — a freelance photographer and filmmaker based between
            London and Lisbon. For the last decade I've chased honest light,
            quiet moments, and the kind of frames that feel like they were
            always meant to exist.
          </p>
          <p>
            My work lives in the space between editorial and documentary:
            portraits with weight, stories with texture, and images that hold up
            long after the shoot ends.
          </p>
          <button
            className="ulink about__contact"
            onClick={() => navigate("/contact")}
          >
            Contact <span className="arrow">→</span>
          </button>
        </Reveal>
      </div>

      <SplitText
        text="About Me"
        as="h2"
        className="about__headline"
        stagger={0.1}
      />
    </section>
  );
}
