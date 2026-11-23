"use client";

import { Fragment, useEffect, useRef, useState, type ElementType } from "react";
import { useParams } from "next/navigation";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** شروع با تأخیر (میلی‌ثانیه) */
  delay?: number;
  /** بیشترین زمان کل افکت (میلی‌ثانیه)، برای متن‌های بلند */
  maxDuration?: number;
  /** حرف‌به‌حرف یا کلمه‌به‌کلمه. پیش‌فرض: انگلیسی حرفی، فارسی کلمه‌ای */
  by?: "char" | "word";
};

export default function TypeReveal({
  text,
  as = "p",
  className = "",
  delay = 0,
  maxDuration = 1200,
  by,
}: Props) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const params = useParams<{ lang?: string }>();

  // در فارسی حرف‌ها به هم می‌چسبن، پس کلمه‌به‌کلمه نشون می‌دیم تا شکل حروف خراب نشه
  const byWord = by ? by === "word" : params?.lang === "fa";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 0% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  const model = words.reduce<{ units: string[]; start: number }[]>(
    (acc, w) => {
      const units = byWord ? [w] : Array.from(w);
      const last = acc[acc.length - 1];
      const start = last ? last.start + last.units.length : 0;
      acc.push({ units, start });
      return acc;
    },
    [],
  );
  const total = model.reduce((sum, m) => sum + m.units.length, 0);
  const step = Math.min(byWord ? 60 : 18, maxDuration / Math.max(total, 1));

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`type-reveal ${className}`}
    >
      {model.map(({ units, start }, wi) => (
        <Fragment key={wi}>
          {wi > 0 && " "}
          {byWord ? (
            <span data-c style={{ transitionDelay: `${delay + start * step}ms` }}>
              {units[0]}
            </span>
          ) : (
            <span className="inline-block whitespace-nowrap">
              {units.map((ch, ci) => (
                <span
                  key={ci}
                  data-c
                  style={{ transitionDelay: `${delay + (start + ci) * step}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          )}
        </Fragment>
      ))}
    </Tag>
  );
}