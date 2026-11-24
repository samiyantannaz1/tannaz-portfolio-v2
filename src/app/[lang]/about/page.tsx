
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import ResponsivePhoto from "@/components/ResponsivePhoto";

// import Cta from "@/components/Cta";
// import { getDictionary } from "@/lib/dictionaries";
// import { hasLocale } from "@/lib/i18n";
// import { buildMetadata } from "@/lib/site";

// const photoDesktop = "/images/nabout-desktop.webp";
// const photoMobile = "/images/nabout-mobile.webp";

// const skills = [
//   "Next.js",
//   "React",
//   "TypeScript",
//   "Tailwind CSS",
//   "Figma",
//   "Accessibility",
//   "Responsive design",
//   "i18n & RTL",
// ];

// type Props = { params: Promise<{ lang: string }> };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lang } = await params;
//   if (!hasLocale(lang)) return {};

//   const dict = await getDictionary(lang);

//   return buildMetadata({
//     lang,
//     path: "/about",
//     title: dict.seo.about.title,
//     description: dict.seo.about.description,
//   });
// }

// export default async function AboutPage({ params }: Props) {
//   const { lang } = await params;
//   if (!hasLocale(lang)) notFound();

//   const dict = await getDictionary(lang);
//   const d = dict.about;

//   return (
//     <main>
//       <section className="bg-secondary px-6 pb-24 pt-28 text-deep md:pb-28 md:pt-36">
//         <div className="mx-auto max-w-7xl">
//           {/* موبایل: عکس عمودی، دسکتاپ: عکس افقی */}
//           <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-deep md:aspect-[3/2]">
         
//             <ResponsivePhoto
//   desktop={photoDesktop}
//   mobile={photoMobile}
//   alt={d.alt}
//   priority
//   scrollZoom
//   sizes="(min-width: 1280px) 1216px, 100vw"
//   desktopPosition="50% 25%"
//   mobilePosition="50% 20%"
// />
//           </div>

//           <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-[5fr_7fr] md:gap-20">
//             <div>
//               <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
//                 {d.eyebrow}
//               </span>

//               <h1 className="font-display text-5xl uppercase leading-[1.1] tracking-wide rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
//                 {d.title}
//               </h1>

//               <p className="mt-8 border-s-2 border-wine ps-5 font-display text-3xl italic leading-snug rtl:not-italic rtl:leading-[1.5]">
//                 {d.quote}
//               </p>
//             </div>

//             <div>
//            <div className="space-y-5">
//   {d.paragraphs.map((text) => (
//     <p
//       key={text}
//       className="max-w-2xl text-[#6e5f5a] rtl:leading-loose"
//     >
//       {text}
//     </p>
//   ))}
// </div>

//               <ul
//                 dir="ltr"
//                 className="mt-8 flex flex-wrap gap-2 rtl:justify-end"
//               >
//                 {skills.map((s) => (
//                   <li
//                     key={s}
//                     className="rounded-full border border-[#d6c8bb] px-4 py-1 text-sm"
//                   >
//                     {s}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="mt-20">
//             <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
//               {d.experienceTitle}
//             </span>

//             <ul className="border-t border-[#d6c8bb]">
//               {d.experience.map((e) => (
//                 <li
//                   key={e}
//                   className="border-b border-[#d6c8bb] py-6 font-display text-3xl rtl:leading-snug"
//                 >
//                   {e}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <Cta lang={lang} dict={dict.cta} />
//     </main>
//   );
// }


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResponsivePhoto from "@/components/ResponsivePhoto";
import Reveal from "@/components/Reveal";

import Cta from "@/components/Cta";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/site";

const photoDesktop = "/images/nabout-desktop.webp";
const photoMobile = "/images/nabout-mobile.webp";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Accessibility",
  "Responsive design",
  "i18n & RTL",
];

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/about",
    title: dict.seo.about.title,
    description: dict.seo.about.description,
  });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const d = dict.about;

  return (
    <main>
      <section className="bg-secondary px-6 pb-24 pt-28 text-deep md:pb-28 md:pt-36">
        <div className="mx-auto max-w-7xl">
          {/* Responsive About Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-deep md:aspect-[3/2]">
            <ResponsivePhoto
              desktop={photoDesktop}
              mobile={photoMobile}
              alt={d.alt}
              priority
              scrollZoom
              sizes="(min-width: 1280px) 1216px, 100vw"
              desktopPosition="50% 25%"
              mobilePosition="50% 20%"
            />
          </div>

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-[5fr_7fr] md:gap-20">
            {/* About Heading */}
            <div>
              <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
                {d.eyebrow}
              </span>

              <h1 className="font-display text-5xl uppercase leading-[1.1] tracking-wide rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
                {d.title}
              </h1>

              <p className="mt-8 border-s-2 border-wine ps-5 font-display text-3xl italic leading-snug rtl:not-italic rtl:leading-[1.5]">
                {d.quote}
              </p>
            </div>

            {/* About Paragraphs */}
            <div>
              <div className="space-y-5">
                {d.paragraphs.map((text, i) => (
                  <Reveal key={text} delay={i * 0.12}>
                    <p className="max-w-2xl text-[#6e5f5a] rtl:leading-loose">
                      {text}
                    </p>
                  </Reveal>
                ))}
              </div>

              {/* Skills */}
              <ul
                dir="ltr"
                className="mt-8 flex flex-wrap gap-2 rtl:justify-end"
              >
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[#d6c8bb] px-4 py-1 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-20">
            <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine rtl:tracking-normal">
              {d.experienceTitle}
            </span>

            <ul className="border-t border-[#d6c8bb]">
              {d.experience.map((e) => (
                <li
                  key={e}
                  className="border-b border-[#d6c8bb] py-6 font-display text-3xl rtl:leading-snug"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta lang={lang} dict={dict.cta} />
    </main>
  );
}

