import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import "./Services.css";

const MACRO =
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=2000";

const TAGS = [
  "Editorial",
  "Photography",
  "#Filmmaking",
  "Award Winning Photographer",
];

const ROWS = [
  { name: "Photography", cta: "Book Now" },
  { name: "Filmmaking", cta: "Book Now" },
  { name: "Videography", cta: "Book Now" },
  { name: "Photo Retouching", cta: "Book Now" },
  { name: "Drone / Aerial", cta: "Book Now" },
  { name: "Event Coverage", cta: "Book Now" },
];

export default function Services() {
  const macroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: macroRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="services" id="services">
      <div className="services__meta">
        <span className="label">What I Do</span>
        <span className="label">Jack Evans</span>
      </div>

      <div className="services__grid">
        <Reveal className="services__tags">
          {TAGS.map((t, i) => (
            <span
              key={t}
              className={`services__tag ${i === 3 ? "services__tag--muted" : ""}`}
            >
              {t}
            </span>
          ))}
        </Reveal>

        <div className="services__rows">
          {ROWS.map((r, i) => (
            <Reveal key={r.name} className="services__row" delay={i * 0.1}>
              <span className="services__row-name">{r.name}</span>
              <div className="services__row-cta">
                <span className="label">Work With Me</span>
                <button className="pill pill--outline">{r.cta} →</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <SplitText
        text="Services"
        as="h2"
        className="services__headline"
        stagger={0.1}
      />

      <div className="services__macro" ref={macroRef}>
        <motion.img
          src={MACRO}
          alt="Camera lens aperture macro"
          style={{ y: reduce ? 0 : y }}
        />
      </div>
    </section>
  );
}
