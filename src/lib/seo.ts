import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

type Args = {
  lang: Locale;
  path: "" | "/about" | "/approach" | "/contact";
  title: string;
  description: string;
};

export function buildMetadata({
  lang,
  path,
  title,
  description,
}: Args): Metadata {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}${path}`]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { ...languages, "x-default": `/en${path}` },
    },
    openGraph: {
      type: "website",
      siteName: "Tannaz Samiyan",
      title,
      description,
      url: `/${lang}${path}`,
      locale: lang === "fa" ? "fa_IR" : "en_US",
      alternateLocale: lang === "fa" ? "en_US" : "fa_IR",
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: "Tannaz Samiyan" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}