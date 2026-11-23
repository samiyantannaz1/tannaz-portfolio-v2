"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ScrollImageProps = {
  children: ReactNode;
  /** مقیاس اولیه که آرام به حالت عادی می‌رسه (پیش‌فرض ۱٫۱۲) */
  zoom?: number;
  /** جابه‌جایی عمودی به درصد، ۰ یعنی خاموش (پیشنهاد: ۳ تا ۵) */
  parallax?: number;
  /** برای هیرو: افکت از بالای صفحه شروع بشه */
  fromTop?: boolean;
};

export default function ScrollImage({
  children,
  zoom = 1.12,
  parallax = 0,
  fromTop = false,
}: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: fromTop
      ? ["start start", "end start"]
      : ["start end", "end start"],
  });

  // نرم کردن خود پیشرفت اسکرول، بعد ساختن مقیاس و جابه‌جایی از روی اون
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    mass: 1,
  });

  // اگه جابه‌جایی داریم، مقیاس نباید زیر این حد بره وگرنه لبه‌ی عکس پیدا می‌شه
  const minScale = 1 + (parallax * 2) / 100;
  const scale = useTransform(progress, [0, 1], [Math.max(zoom, minScale), minScale]);
  const y = useTransform(progress, [0, 1], [`${-parallax}%`, `${parallax}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={shouldReduceMotion ? undefined : { scale, y }}
      >
        {children}
      </motion.div>
    </div>
  );
}