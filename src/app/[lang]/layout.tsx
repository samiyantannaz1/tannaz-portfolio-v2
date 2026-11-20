
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Cormorant_Garamond,
  Montserrat,
  Vazirmatn,
} from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/lib/contact";
import { dirOf, hasLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
});

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    keywords: dict.seo.keywords,
    authors: [{ name: dict.seo.author }],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        fa: "/fa",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Tannaz Samiyan",
      title: dict.seo.home.title,
      description: dict.seo.home.description,
      url: `/${lang}`,
      locale: lang === "fa" ? "fa_IR" : "en_US",
      alternateLocale: lang === "fa" ? "en_US" : "fa_IR",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Tannaz Samiyan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.home.title,
      description: dict.seo.home.description,
      images: ["/og.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tannaz Samiyan",
    jobTitle:
      lang === "fa"
        ? "طراح وب و توسعه‌دهنده فرانت‌اند فریلنسر"
        : "Freelance web designer and front-end developer",
    url: `${siteUrl}/${lang}`,
    email: contact.email,
    sameAs: [contact.linkedinHref, contact.githubHref],
  };

  return (
    <html lang={lang} dir={dirOf(lang)}>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${vazir.variable} font-body font-light antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Header lang={lang} dict={dict.nav} />

        {children}

        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
