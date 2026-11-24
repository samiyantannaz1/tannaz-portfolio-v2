"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  /** تأخیر به ثانیه (برای ظاهر شدن پله‌ای) */
  delay?: number;
  /** فاصله‌ی شروع از پایین به پیکسل */
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}