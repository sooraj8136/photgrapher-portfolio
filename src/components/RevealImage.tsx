import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  children?: ReactNode;
};

const wrap: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const img: Variants = {
  hidden: { scale: 1.25 },
  show: {
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  children,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={{ overflow: "hidden" }}>
        <img src={src} alt={alt} className={imgClassName} loading="lazy" />
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden" }}
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imgClassName}
        loading="lazy"
        variants={img}
      />
      {children}
    </motion.div>
  );
}
