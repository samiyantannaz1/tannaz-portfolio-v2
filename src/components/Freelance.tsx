


import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionaries";

export default function Freelance({
  dict,
}: {
  dict: Dictionary["freelance"];
}) {
  return (
    <section className="bg-secondary px-6 py-28 text-deep">
      <div className="mx-auto max-w-7xl">
        <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
          {dict.eyebrow}
        </span>

        <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-wide rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
          {dict.title}
        </h2>

        <Reveal>
          <p className="max-w-2xl text-[#6e5f5a] rtl:leading-loose">
            {dict.text}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-[#d6c8bb] bg-[#d6c8bb] md:grid-cols-2 lg:grid-cols-3">
          {dict.benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={(i % 3) * 0.1}
              className="bg-secondary px-8 py-9"
            >
              <b className="text-xs font-medium tracking-[0.25em] text-wine">
                {String(i + 1).padStart(2, "0")}
              </b>

              <h3 className="mb-2 mt-3 font-display text-2xl rtl:leading-snug">
                {b.title}
              </h3>

              <p className="text-[#6e5f5a] rtl:leading-loose">
                {b.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
