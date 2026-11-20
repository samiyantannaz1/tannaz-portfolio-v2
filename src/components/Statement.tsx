import type { Dictionary } from "@/lib/dictionaries";

export default function Statement({
  dict,
}: {
  dict: Dictionary["statement"];
}) {
  return (
    <section className="bg-deep px-6 py-24 text-center md:py-32">
      <div className="mx-auto max-w-7xl">
        <span className="mb-5 block text-[11px] uppercase tracking-[0.3em] text-wine-light rtl:tracking-normal">
          {dict.eyebrow}
        </span>

        <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-white rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
          {dict.name}
        </h2>

        <p className="mx-auto mt-10 max-w-4xl font-display text-3xl italic leading-snug text-white rtl:not-italic rtl:leading-[1.5] md:text-5xl">
          {dict.quote}
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-muted rtl:leading-loose">
          {dict.text}
        </p>

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 md:border-y md:border-white/15">
          {dict.services.map((s) => (
            <li
              key={s}
              className="border-t border-white/15 py-7 text-[11px] uppercase tracking-[0.25em] text-accent rtl:tracking-normal md:border-s md:border-t-0 md:first:border-s-0"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}