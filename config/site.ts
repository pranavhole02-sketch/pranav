const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || null;

/**
 * Single source of truth for identity, contact and external links.
 * Set any `null` link below to a real URL and it appears on the site automatically.
 */
export const siteConfig = {
  name: "Pranav Hole",
  fullName: "Pranav Sandip Hole",
  initials: "PH",
  role: "Freelance AI Engineer & Full-Stack Developer",
  location: "Bengaluru, India",
  siteUrl: configuredSiteUrl,
  contact: {
    email: "pranavhole02@gmail.com",
    phone: "+91 8530008525",
    phoneHref: "tel:+918530008525",
  },
  socials: {
    github: "https://github.com/pranavhole02-sketch" as string | null,
    linkedin: "https://www.linkedin.com/in/pranav-hole/" as string | null,
  },
  projectLinks: {
    chainops: { github: null as string | null, live: null as string | null },
    tokentrade: { github: null as string | null, live: null as string | null },
  },
} as const;

/** Public origin of the deployed site (env var, then Vercel, then local dev). */
export function getSiteUrl(): string {
  if (siteConfig.siteUrl) return siteConfig.siteUrl;
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
}
