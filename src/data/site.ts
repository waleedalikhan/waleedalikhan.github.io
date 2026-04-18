/**
 * Single source of truth for site-wide identity, SEO defaults,
 * external profile links, and navigation.
 */

export const site = {
  name: "Waleed Ali Khan",
  shortName: "Waleed",
  title: "Product-focused Senior Frontend Architect",
  tagline:
    "Building robust, high-impact enterprise solutions that drive business innovation.",
  description:
    "Waleed Ali Khan — Senior Frontend Architect with 6+ years shipping SaaS platforms. React, Next.js, Svelte 5, Vue, Astro, Tailwind v4. Systems that scale.",
  location: "Lahore, Pakistan",
  email: "waleedomore@gmail.com",
  phone: "+92 301 2447 999",
  url: "https://waleedalikhan.github.io",
  ogImage: "/og.svg",
  locale: "en",
  themeColor: "#050505",
  /** E.164 digits only (no +) for https://wa.me/ */
  whatsappPhoneE164: "923012447999",
  whatsappPrefillMessage:
    "Hi Waleed — I found you via your portfolio and wanted to reach out.",
} as const;

export const socials = {
  github: "https://github.com/waleedalikhan",
  linkedin: "https://www.linkedin.com/in/waleedomore",
  email: `mailto:${site.email}`,
  resume: "/resume.pdf",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
