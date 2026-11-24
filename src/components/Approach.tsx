

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollImage from "@/components/ScrollImage";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

function Icon() {
  return (
    <svg
      viewBox="0 0 24 40"
      aria-hidden="true"
      className="mt-1 h-[30px] w-6 flex-none fill-none stroke-white"
      strokeWidth="1.2"
    >
      <path d="M12 2 22 10v28H2V10z" />
      <path d="M12 8l6 5v21H6V13z" />
    </svg>
  );
}

type ApproachProps = {
  lang: Locale;
  dict: Dictionary["approach"];
  showLink?: boolean;
  photo?: string;
  page?: boolean;
};

export default function Approach({
  lang,
  dict,
  showLink = false,
  photo,
  page = false,
}: ApproachProps) {
  return (
    <section className={`bg-deep-2 px-6 ${page ? "pb-28 pt-40" : "py-28"}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[5fr_7fr]">
        {/* Image */}
        <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-sm bg-[linear-gradient(160deg,#3a121c,#18080c)] text-sm text-muted">
          {photo ? (
            <ScrollImage>
              <Image
                src={photo}
                alt={dict.alt}
                fill
                quality={90}
                sizes="(min-width: 1280px) 530px, (min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </ScrollImage>
          ) : (
            <span>{dict.placeholder}</span>
          )}
        </div>

        {/* Content */}
        <div>
          <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-accent rtl:tracking-normal">
            {dict.eyebrow}
          </span>

          <h2 className="mb-6 font-display text-5xl uppercase tracking-wide text-white rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
            {dict.title}
          </h2>

          <Reveal>
            <p className="mb-8 max-w-xl text-muted rtl:leading-loose">
              {dict.text}
            </p>
          </Reveal>

          {dict.features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.1}
              className="flex gap-5 border-t border-white/10 py-6"
            >
              <Icon />

              <div>
                <h3 className="mb-1 font-display text-lg uppercase tracking-[0.12em] text-white rtl:tracking-normal">
                  {f.title}
                </h3>

                <p className="text-sm text-neutral-500 rtl:leading-loose">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}

          {showLink && (
            <Link
              href={`/${lang}/approach`}
              className="mt-8 inline-block border-b border-accent pb-1 text-[11px] uppercase tracking-[0.25em] text-accent rtl:tracking-normal"
            >
              {dict.readMore}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
