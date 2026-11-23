"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

// بعد از رفتن به صفحه‌ی جدید، فوراً به بالا برگرد
function ScrollToTopOnNavigate() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // اگه کاربر «کاهش حرکت» رو روشن کرده، اسکرول نرم خاموش می‌مونه
  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: !reduce, anchors: true }}
    >
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}