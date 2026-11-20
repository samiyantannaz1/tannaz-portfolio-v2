// import Image from "next/image";
// import Link from "next/link";

// type IntroProps = {
//   photo?: string;
//   flip?: boolean; // عکس آینه‌ای بشه
//   reverse?: boolean; // عکس بره سمت راست
// };

// export default function Intro({ photo, flip = false, reverse = false }: IntroProps) {
//   return (
//     <section className="bg-secondary px-6 py-28 text-deep">
//       <div
//         className={`mx-auto grid max-w-7xl items-center gap-16 ${
//           reverse ? "md:grid-cols-[7fr_5fr]" : "md:grid-cols-[5fr_7fr]"
//         }`}
//       >
//         <div
//           className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-sm bg-[linear-gradient(160deg,#c9b9a6,#a89684)] text-sm text-[#5a4a42] ${
//             reverse ? "md:order-2" : ""
//           }`}
//         >
//           {photo ? (
//             <Image
//               src={photo}
//               alt="Portrait of Tannaz Samiyan"
//               fill
//               quality={90}
//               sizes="(min-width: 1280px) 530px, (min-width: 768px) 42vw, 100vw"
//               className={`object-cover ${flip ? "scale-x-[-1]" : ""}`}
//             />
//           ) : (
//             <span>Place your portrait here</span>
//           )}
//         </div>

//         <div>
//           <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-wine">
//             The developer
//           </span>
//           <h2 className="mb-6 font-display text-5xl uppercase leading-[1.1] tracking-wide">
//             Tannaz Samiyan
//           </h2>
//           <p className="max-w-xl text-[#6e5f5a]">
//             Computer engineer and front-end developer, focused on interfaces
//             that are both beautiful and fast. [Write two or three sentences
//             about yourself.]
//           </p>
//           <p className="my-8 border-l-2 border-wine pl-5 font-display text-3xl italic leading-snug">
//             Every interface should reflect the people who use it.
//           </p>
//           <Link
//             href="/about"
//             className="border-b border-wine pb-1 text-[11px] uppercase tracking-[0.25em] text-wine"
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type IntroProps = {
  lang: Locale;
  dict: Dictionary["intro"];
  photo?: string;
  flip?: boolean; // عکس آینه‌ای بشه
  reverse?: boolean; // جای عکس و متن عوض بشه
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
            <Image
              src={photo}
              alt={dict.alt}
              fill
              quality={90}
              sizes="(min-width: 1280px) 530px, (min-width: 768px) 42vw, 100vw"
              className={`object-cover ${flip ? "scale-x-[-1]" : ""}`}
            />
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
          <p className="max-w-xl text-[#6e5f5a] rtl:leading-loose">
            {dict.text}
          </p>
          <p className="my-8 border-s-2 border-wine ps-5 font-display text-3xl italic leading-snug rtl:not-italic rtl:leading-[1.5]">
            {dict.quote}
          </p>
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