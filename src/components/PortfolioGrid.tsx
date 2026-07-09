import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import "./PortfolioGrid.css";

type Shot = { src: string; alt: string; label: string };

const SHOTS: Shot[] = [
  {
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Editorial fashion portrait warm tones",
    label: "Editorial — 01",
  },
  {
    src: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Cinematic portrait moody amber light",
    label: "Cinematic — 02",
  },
  {
    src: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Vibrant editorial outdoor portrait",
    label: "Portrait — 03",
  },
  {
    src: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Studio fashion portrait bold colours",
    label: "Studio — 04",
  },
  {
    src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Behind the scenes on set rich colour",
    label: "On Set — 05",
  },
  {
    src: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Street portrait vivid light",
    label: "Street — 06",
  },
  {
    src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Character study warm studio light",
    label: "Character — 07",
  },
  {
    src: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Golden hour intimate portrait",
    label: "Moment — 08",
  },
];

export default function PortfolioGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // translate from 0 to -(trackWidth - viewportWidth)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const showMobileGallery = isMobile || reduce;

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__head">
        <h2 className="portfolio__title">©2025–2026</h2>
        <div className="portfolio__meta">
          <span className="label">Jack Evans</span>
          <span className="label">Photography Portfolio</span>
        </div>
      </div>

      {showMobileGallery ? (
        <div className="portfolio__track portfolio__track--mobile" role="list" aria-label="Portfolio gallery">
          {SHOTS.map((s, i) => (
            <figure key={i} className="portfolio__cell" role="listitem">
              <img src={s.src} alt={s.alt} loading="lazy" />
              <figcaption className="portfolio__cell-label label">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="portfolio__pin" ref={ref}>
          <div className="portfolio__sticky">
            <motion.div className="portfolio__track" style={{ x }}>
              {SHOTS.map((s, i) => (
                <figure key={i} className="portfolio__cell">
                  <img src={s.src} alt={s.alt} loading="lazy" />
                  <figcaption className="portfolio__cell-label label">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
