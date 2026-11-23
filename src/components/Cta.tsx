
import Link from "next/link";
import TypeReveal from "@/components/TypeReveal";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function Cta({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["cta"];
}) {
  return (
    <section className="bg-wine px-6 py-24 text-center">
      <TypeReveal
        as="h2"
        text={dict.title}
        className="mx-auto mb-10 max-w-[18ch] font-display text-5xl uppercase leading-[1.1] tracking-wide text-white rtl:leading-[1.4] rtl:tracking-normal md:text-6xl"
      />

      <Link
        href={`/${lang}/contact`}
        className="inline-block border border-white px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-wine rtl:tracking-normal"
      >
        {dict.button}
      </Link>
    </section>
  );
}
