import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Patrick_Hand } from "next/font/google";

import { getSiteUrl } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";

import "./globals.css";

const headingFont = Patrick_Hand({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
  fallback: ["Caveat", "Comic Sans MS", "cursive", "sans-serif"],
});

const bodyFont = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const deploymentSiteUrl = getSiteUrl();
const metadataBase = new URL(deploymentSiteUrl);

const title = "Pranav Hole | Freelance AI Engineer & Full-Stack Developer";
const description =
  "Freelance senior AI engineer and full-stack developer. I build multi-agent AI systems, RAG, SaaS platforms and scalable backends with Next.js, Node.js, Python and PostgreSQL. Available for remote projects.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Pranav Hole",
  },
  description,
  applicationName: "Pranav Hole Portfolio",
  generator: "Next.js",
  keywords: [
    "Pranav Hole",
    "Freelance AI Engineer",
    "Freelance Full Stack Developer",
    "Hire AI Engineer",
    "Multi-Agent AI Developer",
    "Agentic AI Developer",
    "RAG Developer",
    "LLM Integration",
    "MCP Developer",
    "LangGraph Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Python FastAPI Developer",
    "PostgreSQL Developer",
    "SaaS MVP Development",
    "GraphQL API Developer",
    "AWS Docker DevOps",
    "Remote Freelance Developer India",
    "Bengaluru Developer",
  ],
  authors: [{ name: "Pranav Hole", url: deploymentSiteUrl }],
  creator: "Pranav Hole",
  publisher: "Pranav Hole",
  category: "technology",
  metadataBase,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: deploymentSiteUrl,
    siteName: "Pranav Hole",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Pranav Hole - Freelance AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        alt: "Pranav Hole - Freelance AI Engineer & Full-Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "format-detection": "telephone=no, address=no, email=no",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6B8B8" },
    { media: "(prefers-color-scheme: dark)", color: "#17172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth bg-cream motion-reduce:scroll-auto`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-w-80 overflow-x-clip bg-cream font-sans text-ink [text-rendering:optimizeLegibility] selection:bg-pastel-yellow selection:text-ink [&_[id]]:scroll-mt-[calc(var(--header-height)_+_18px)] [&_:focus-visible]:outline-[3px] [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-purple motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:scroll-auto motion-reduce:[&_*]:transition-none">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] bg-[radial-gradient(rgb(23_23_42_/_7%)_0.55px,transparent_0.7px)] bg-[length:12px_12px] opacity-20" />
        {children}
      </body>
    </html>
  );
}
