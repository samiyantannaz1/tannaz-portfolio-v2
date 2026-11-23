"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

// فقط بار اول (باز شدن سایت) انیمیشن نداشته باشه
let firstLoad = true;

export default function Template({ children }: { children: ReactNode }) {
  const skip = firstLoad;

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <motion.div
      initial={skip ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}