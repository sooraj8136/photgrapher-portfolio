import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

const LINKS = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (p: string) =>
    pathname === p || (pathname === "/" && p === "/portfolio");

  return (
    <>
      <nav className={`nav ${solid || open ? "nav--solid" : ""}`}>
        <button
          className="nav__logo"
          onClick={() => go("/")}
          aria-label="Jack Evans home"
        >
          JE
        </button>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.path}>
              <button
                className={`nav__link ${isActive(l.path) ? "is-active" : ""}`}
                onClick={() => go(l.path)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="menu-overlay__list">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.path}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <button
                    className="menu-overlay__link"
                    onClick={() => go(l.path)}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="menu-overlay__meta label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span>Freelance Photographer</span>
              <span>Portfolio 2022–2023</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
