import React from "react";
import { getSiteUrl, siteConfig } from "@/config/site";
import { SITE_INFO, SERVICES } from "@/lib/constants";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: "Senior AI Engineer",
    description: SITE_INFO.aboutCopy,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government College of Engineering Amravati",
    },
    worksFor: { "@type": "Organization", name: "Small Day Tech" },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin].filter(Boolean),
    knowsAbout: [
      "Multi-agent AI orchestration",
      "Retrieval-augmented generation",
      "Model Context Protocol",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "AWS",
      "Docker",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: `${siteConfig.name} - Freelance AI & Full-Stack Development`,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: "Worldwide",
    email: siteConfig.contact.email,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: SITE_INFO.subtext,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        id="schema-person"
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        id="schema-service"
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        id="schema-website"
        type="application/ld+json"
      />
    </>
  );
}
