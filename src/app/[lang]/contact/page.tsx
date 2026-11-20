import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import ContactIcon, { type IconName } from "@/components/ContactIcon";
import { contact, whatsappLink } from "@/lib/contact";
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
    path: "/contact",
    title: dict.seo.contact.title,
    description: dict.seo.contact.description,
  });
}
const dt =
  "block text-[11px] uppercase tracking-[0.3em] text-accent rtl:tracking-normal rtl:text-sm";

type Item = {
  icon: IconName;
  label: string;
  text: string;
  href: string;
  external: boolean;
};

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.contactPage;

  const items: Item[] = [
    {
      icon: "whatsapp",
      label: d.whatsapp,
      text: contact.whatsappDisplay,
      href: whatsappLink(d.greeting),
      external: true,
    },
    {
      icon: "telegram",
      label: d.telegram,
      text: contact.telegramDisplay,
      href: contact.telegramHref,
      external: true,
    },
    {
      icon: "mail",
      label: d.email,
      text: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      icon: "phone",
      label: d.phone,
      text: contact.phoneDisplay,
      href: contact.phoneHref,
      external: false,
    },
    {
      icon: "linkedin",
      label: d.linkedin,
      text: contact.linkedinDisplay,
      href: contact.linkedinHref,
      external: true,
    },
    {
      icon: "github",
      label: d.github,
      text: contact.githubDisplay,
      href: contact.githubHref,
      external: true,
    },
  ];

  return (
    <main className="bg-deep px-6 pb-28 pt-40">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[5fr_7fr]">
        <div>
          <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-accent rtl:tracking-normal">
            {d.eyebrow}
          </span>
          <h1 className="mb-6 font-display text-5xl uppercase tracking-wide text-white rtl:leading-[1.4] rtl:tracking-normal md:text-6xl">
            {d.title}
          </h1>
          <p className="max-w-md text-muted rtl:leading-loose">{d.text}</p>

          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-white/15 text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-deep">
                    <ContactIcon name={item.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className={dt}>{item.label}</span>
                    <span
                      dir="ltr"
                      className="mt-0.5 block break-words text-[15px] text-neutral-200 transition-colors group-hover:text-white rtl:text-right"
                    >
                      {item.text}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm dict={dict.form} />
      </div>
    </main>
  );
}