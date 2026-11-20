import Link from "next/link";
import ResponsivePhoto from "@/components/ResponsivePhoto";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type HeroProps = {
  lang: Locale;
  dict: Dictionary["hero"];
  photo: string;
  mobilePhoto?: string;
  focus?: string;
  focusMobile?: string;
};

export default function Hero({
  lang,
  dict,
  photo,
  mobilePhoto,
  focus = "50% 25%",
  focusMobile = "50% 20%",
}: HeroProps) {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-deep px-6 pb-10 pt-32 md:pb-20 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#4a1a24,#18080c)]">
        <ResponsivePhoto
          desktop={photo}
          mobile={mobilePhoto}
          alt={dict.alt}
          priority
          desktopPosition={focus}
          mobilePosition={focusMobile}
        />
      </div>

      {/* موبایل: بالا و پایین پررنگ، وسط کم‌رنگ‌تر */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,8,12,.86)_0%,rgba(24,8,12,.32)_30%,rgba(24,8,12,.38)_55%,rgba(24,8,12,.97)_100%)] md:hidden" />

      {/* دسکتاپ: سایه از چپ و از پایین */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(24,8,12,.74)_0%,rgba(24,8,12,.32)_38%,rgba(24,8,12,.1)_68%,rgba(24,8,12,.04)_100%)] md:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(24,8,12,.95)_0%,rgba(24,8,12,.65)_35%,rgba(24,8,12,.12)_68%,transparent_100%)] md:block" />

      {/* در فارسی: بلوک سمت چپ می‌مونه (justify-end در RTL یعنی چپ) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl rtl:flex rtl:justify-end">
        {/* در فارسی: عرض بلوک اندازه‌ی محتوا و خود متن تراز راست */}
        <div className="rtl:w-fit rtl:max-w-full rtl:text-right">
          <span className="mb-3 block text-[10px] uppercase leading-relaxed tracking-[0.25em] text-wine-light rtl:tracking-normal md:mb-4 md:text-[11px] md:tracking-[0.3em]">
            {dict.eyebrow1}
            <br className="md:hidden" />
            {dict.eyebrow2}
          </span>
          <h1 className="max-w-[20ch] font-display text-[1.65rem] uppercase leading-[1.15] tracking-wide text-white rtl:tracking-normal sm:text-4xl md:max-w-[12ch] md:text-7xl md:leading-[1.04]">
            {dict.title}
          </h1>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted md:mt-7 md:max-w-md md:text-base">
            {dict.text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <Link
              href={`/${lang}/about`}
              className="border border-accent px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-deep rtl:tracking-normal md:px-8 md:py-3.5 md:text-[11px] md:tracking-[0.25em]"
            >
              {dict.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="border border-accent px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-deep rtl:tracking-normal md:px-8 md:py-3.5 md:text-[11px] md:tracking-[0.25em]"
            >
              {dict.contact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}