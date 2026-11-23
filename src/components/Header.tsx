

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import type { Dictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";

const LOGO = "/images/logo-t-filled.svg";

function LangSwitch({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  // آدرس فعلی بدون پیشوند زبان: /en/about → /about
  const rest = pathname.replace(/^\/(en|fa)(?=\/|$)/, "");

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center gap-4 pb-2 text-[11px] tracking-[0.25em]"
    >
      {locales.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-white/30" />}
          <Link
            href={`/${l}${rest}`}
            hrefLang={l}
            aria-current={lang === l ? "true" : undefined}
            className={`relative transition-colors ${
              lang === l
                ? "text-white after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-wine-light"
                : "text-muted hover:text-white"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        </Fragment>
      ))}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-white/15"
      />
    </div>
  );
}

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const links = [
    { href: "", label: dict.home },
    { href: "/about", label: dict.about },
    { href: "/approach", label: dict.approach },
    { href: "/contact", label: dict.contact },
  ];

  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // تغییر جدید: وقتی منو بازه، اسکرول نرم (Lenis) هم متوقف بشه
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <>
      <header
        dir="ltr"
        className={`fixed inset-x-0 top-0 z-30 border-b border-white/5 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-deep/90 py-3" : "bg-deep/40 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* لوگو */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-3 justify-self-start"
            aria-label={dict.homeLabel}
          >
            <Image src={LOGO} alt="" width={40} height={40} />
            <span className="font-display text-xl uppercase tracking-[0.14em] text-white">
              {dict.name}
            </span>
          </Link>

          {/* منو (وسط) */}
          <nav className="hidden gap-10 lg:flex" aria-label="Main">
            {links.map(({ href, label }) => {
              const full = `/${lang}${href}`;
              const active = pathname === full;
              return (
                <Link
                  key={href}
                  href={full}
                  aria-current={active ? "page" : undefined}
                  className={`relative pb-1.5 text-[11px] uppercase tracking-[0.3em] transition-colors rtl:tracking-normal rtl:text-[13px] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:bg-wine-light after:transition-transform after:duration-300 ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-muted after:scale-x-0 hover:text-white hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* زبان (سمت دیگر) */}
          <div className="hidden justify-self-end lg:block">
            <LangSwitch lang={lang} />
          </div>

          {/* همبرگر موبایل */}
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={dict.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* منوی تمام‌صفحه‌ی موبایل */}
      {open && (
        <div
          dir="ltr"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-deep"
        >
          <button
            type="button"
            className="absolute end-5 top-4 text-4xl leading-none text-white"
            aria-label={dict.closeMenu}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          {links.map(({ href, label }) => {
            const full = `/${lang}${href}`;
            return (
              <Link
                key={href}
                href={full}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-[0.3em] rtl:tracking-normal rtl:text-base ${
                  pathname === full ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-6">
            <LangSwitch lang={lang} />
          </div>
        </div>
      )}
    </>
  );
}