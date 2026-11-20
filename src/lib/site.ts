// export const siteUrl =
//   process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type BuildMetadataProps = {
  lang: Locale;
  path: string;
  title: string;
  description: string;
};

export function buildMetadata({
  lang,
  path,
  title,
  description,
}: BuildMetadataProps): Metadata {
  const canonicalUrl = `${siteUrl}/${lang}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en${path}`,
        fa: `${siteUrl}/fa${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Tannaz Samiyan",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
  };
}




