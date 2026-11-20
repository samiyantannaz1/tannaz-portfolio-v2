export const contact = {
  email: "samiyantannaz1@gmail.com",

  phoneDisplay: "0910 510 6627",
  phoneHref: "tel:+989105106627",

  // شماره‌ی واتس‌اپ با پیش‌شماره‌ی ۹۸ و بدون صفر اول
  whatsappNumber: "989365968840",
  whatsappDisplay: "0936 596 8840",

  telegramDisplay: "0910 510 6627",
  telegramHref: "https://t.me/+989105106627",

  linkedinDisplay: "linkedin.com/in/tannaz-samiyan",
  linkedinHref: "https://www.linkedin.com/in/tannaz-samiyan-69a884395/",

  githubDisplay: "github.com/samiyantannaz1",
  githubHref: "https://github.com/samiyantannaz1",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;