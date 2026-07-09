import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import "./Hero.css";

const HERO_IMG =
  "https://images.pexels.com/photos/30681572/pexels-photo-30681572.jpeg?auto=compress&cs=tinysrgb&w=2000";

const meta = ["Portfolio 2025–2026", "Freelance Photographer", "Award Winner"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref} id="top">
      <motion.div
        className="hero__media"
        style={{ y: reduce ? 0 : y }}
      >
        <img className="hero__img" src={HERO_IMG} alt="Photographer on set" />
      </motion.div>

      <motion.div
        className="hero__meta"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
        }}
      >
        {meta.map((m) => (
          <motion.span
            key={m}
            className="label"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {m}
          </motion.span>
        ))}
      </motion.div>

      <motion.h1
        className="hero__wordmark"
        style={{ opacity: reduce ? 1 : opacity }}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
        }}
      >
        {["Jack", "Evans"].map((w) => (
          <motion.span
            key={w}
            variants={{
              hidden: { y: "110%" },
              show: {
                y: "0%",
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="label">Scroll</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
