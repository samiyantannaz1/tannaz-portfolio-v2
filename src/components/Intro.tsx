

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TypeReveal from "@/components/TypeReveal";
import ScrollImage from "@/components/ScrollImage";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type IntroProps = {
  lang: Locale;
  dict: Dictionary["intro"];
  photo?: string;
  flip?: boolean;
  reverse?: boolean;
};

export default function Intro({
  lang,
  dict,
  photo,
  flip = false,
  reverse = false,
}: IntroProps) {
  return (
    <section className="bg-secondary px-6 py-28 text-deep">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-16 ${
          reverse ? "md:grid-cols-[7fr_5fr]" : "md:grid-cols-[5fr_7fr]"
        }`}
      >
        <div
          className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-sm bg-[linear-gradient(160deg,#c9b9a6,#a89684)] text-sm text-[#5a4a42] ${
            reverse ? "md:order-2" : ""
          }`}
        >
          {photo ? (
            <ScrollImage>
              <Image
                src={photo}
                alt={dict.alt}
                fill
                quality={90}
                sizes="(min-width: 1280px) 530px, (min-width: 768px) 42vw, 100vw"
                className={`object-cover ${flip ? "scale-x-[-1]" : ""}`}
              />
            </ScrollImage>
          ) : (
            <span>{dict.placeholder}</span>
          )}
        </div>

        <div>
          <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
            {dict.eyebrow}
          </span>

          <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-wide rtl:leading-[1.4] rtl:tracking-normal">
            {dict.name}
          </h2>

          <Reveal>
            <p className="max-w-xl text-[#6e5f5a] rtl:leading-loose">
              {dict.text}
            </p>
          </Reveal>

          <TypeReveal
            as="p"
            text={dict.quote}
            by="word"
            className="my-8 border-s-2 border-wine ps-5 font-display text-3xl italic leading-snug rtl:not-italic rtl:leading-[1.5]"
          />

          <Link
            href={`/${lang}/about`}
            className="border-b border-wine pb-1 text-[11px] uppercase tracking-[0.25em] text-wine rtl:tracking-normal"
          >
            {dict.readMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

