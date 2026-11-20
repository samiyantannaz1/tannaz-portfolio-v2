import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

type ProjectMeta = {
  demo: string;
  repo?: string;
  image?: string;
};

const projects: ProjectMeta[] = [
  {
    demo: "https://samiyantannaz1.github.io/nava-farhadi/",
    image: "/images/projects/nava-farhadi-studio.webp",
  },
  {
    demo: "https://samiyantannaz1.github.io/nava-farhadi-portfolio",
    image: "/images/projects/nava-farhadi-portfolio.webp",
  },
  {
    demo: "https://samiyantannaz1.github.io/arman-vaziri-v2/",
    image: "/images/projects/arman-vaziri.webp",
  },
];

const linkClass =
  "text-[11px] uppercase tracking-[0.2em] text-white underline underline-offset-4 rtl:tracking-normal";

export default function Work({ dict }: { dict: Dictionary["work"] }) {
  return (
    <section className="bg-deep px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-accent rtl:tracking-normal">
          {dict.eyebrow}
        </span>
        <h2 className="font-display text-5xl uppercase tracking-wide text-white rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
          {dict.title}
        </h2>

        {dict.projects.map((p, i) => {
          const flipped = i % 2 === 1;
          const meta = projects[i];
          return (
            <article
              key={p.title}
              className={`mt-20 grid items-center gap-12 md:gap-16 ${
                flipped ? "md:grid-cols-[5fr_7fr]" : "md:grid-cols-[7fr_5fr]"
              }`}
            >
              {/* کادر عکس: با هاور نرم جلو میاد و حالت شیشه‌ای می‌گیره */}
              <a
                href={meta?.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${dict.view}: ${p.title}`}
                className={`group relative block aspect-[1866/900] overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(135deg,#3a121c,#18080c)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none ${
                  flipped ? "md:order-2" : ""
                }`}
              >
                {meta?.image ? (
                  <Image
                    src={meta.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(min-width: 1280px) 700px, (min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full flex-col gap-2 p-5"
                  >
                    <i className="block h-2 w-[30%] rounded-full bg-accent" />
                    <i className="block h-2 w-[55%] rounded-full bg-white/10" />
                    <b className="mt-1 flex-1 rounded-sm bg-[linear-gradient(135deg,#902637,#4a1420)] opacity-80" />
                  </div>
                )}

                {/* دسکتاپ (دستگاه‌های دارای ماوس): لایه‌ی شیشه‌ای روی هاور */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-deep/35 opacity-0 backdrop-blur-[6px] transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                >
                  <span className="translate-y-3 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0 motion-reduce:transition-none rtl:tracking-normal">
                    {dict.view} ↗
                  </span>
                </span>

                {/* موبایل و تبلت (دستگاه‌های لمسی): دکمه‌ی شیشه‌ای کوچیک همیشه پایین عکس */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 end-3 hidden rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md [@media(hover:none)]:block rtl:tracking-normal"
                >
                  {dict.view} ↗
                </span>
              </a>

              <div>
                <h3 className="font-display text-4xl uppercase tracking-wide text-white rtl:leading-[1.4] rtl:tracking-normal">
                  {p.title}
                </h3>
                <p
                  dir="ltr"
                  className="mb-4 mt-1 text-xs uppercase tracking-[0.2em] text-accent rtl:text-end"
                >
                  {p.tags}
                </p>
                <p className="mb-6 text-muted rtl:leading-loose">
                  {p.description}
                </p>
                {meta?.demo && (
                  <a
                    href={meta.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} me-6`}
                  >
                    {dict.demo}
                  </a>
                )}
                {meta?.repo && (
                  <a
                    href={meta.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {dict.repo}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}