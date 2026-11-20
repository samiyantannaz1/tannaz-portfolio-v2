// import type { Metadata } from "next";
// import Approach from "@/components/Approach";
// import Cta from "@/components/Cta";

// export const metadata: Metadata = {
//   title: "Our approach — Tannaz Samiyan",
// };

// export default function ApproachPage() {
//   return (
//     <main>
//       <Approach page photo="/images/approach.webp" />
//       <Cta />
//     </main>
//   );
// }

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Approach from "@/components/Approach";
import Cta from "@/components/Cta";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/site";
type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/approach",
    title: dict.seo.approach.title,
    description: dict.seo.approach.description,
  });
}
export default async function ApproachPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main>
      <Approach
        lang={lang}
        dict={dict.approach}
        page
        photo="/images/napproach.webp"
      />
      <Cta lang={lang} dict={dict.cta} />
    </main>
  );
}