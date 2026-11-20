import type { Locale } from "./i18n";
import type en from "@/dictionaries/en.json";

// شکل فایل انگلیسی، الگوی همه‌ی زبان‌ها می‌شه. اگه کلیدی توی fa.json کم باشه، TypeScript خطا می‌ده.
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fa: () => import("@/dictionaries/fa.json").then((m) => m.default),
};

export const getDictionary = (lang: Locale) => dictionaries[lang]();