

// import { notFound } from "next/navigation";
// import Hero from "@/components/Hero";
// import Statement from "@/components/Statement";
// import Intro from "@/components/Intro";
// import Work from "@/components/Work";
// import Freelance from "@/components/Freelance";
// import Approach from "@/components/Approach";
// import Cta from "@/components/Cta";
// import { getDictionary } from "@/lib/dictionaries";
// import { hasLocale } from "@/lib/i18n";

// type Props = { params: Promise<{ lang: string }> };

// export default async function Home({ params }: Props) {
//   const { lang } = await params;
//   if (!hasLocale(lang)) notFound();
//   const dict = await getDictionary(lang);

//   return (
//     <main>
//       <Hero
//         lang={lang}
//         dict={dict.hero}
//         photo="/images/hero-desktop.webp"
//         mobilePhoto="/images/nhero-mobile.webp"
//       />
//       <Statement dict={dict.statement} />
//      <Intro
//   lang={lang}
//   dict={dict.intro}
//   photo="/images/tttttt.webp"
//   flip={lang === "en"}
// />
//       <Work dict={dict.work} />
//       <Freelance dict={dict.freelance} />
//       <Approach
//         lang={lang}
//         dict={dict.approach}
//         showLink
//         photo="/images/napproach.webp"
//       />
//       <Cta lang={lang} dict={dict.cta} />
//     </main>
//   );
// }



import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Freelance from "@/components/Freelance";
import Approach from "@/components/Approach";
import Cta from "@/components/Cta";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

return buildMetadata({
  lang,
  path: "",
  title: dict.seo.home.title,
  description: dict.seo.home.description,
});
}
export default async function Home({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero
        lang={lang}
        dict={dict.hero}
        photo="/images/hero-desktop.webp"
        mobilePhoto="/images/nhero-mobile.webp"
      />

      <Statement dict={dict.statement} />

      <Intro
        lang={lang}
        dict={dict.intro}
        photo="/images/tttttt.webp"
        flip={lang === "en"}
      />

      <Work dict={dict.work} />

      <Freelance dict={dict.freelance} />

      <Approach
        lang={lang}
        dict={dict.approach}
        showLink
        photo="/images/napproach.webp"
      />

      <Cta lang={lang} dict={dict.cta} />
    </main>
  );
}
