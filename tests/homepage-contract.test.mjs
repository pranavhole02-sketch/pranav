import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = async (path) => {
  try {
    return await readFile(new URL(`../${path}`, import.meta.url), "utf8");
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return "";
    }
    throw error;
  }
};

test("homepage renders the portfolio sections in order", async () => {
  const page = await read("app/page.tsx");
  const sections = [
    "<HeroSection",
    "<TrustStrip",
    "<ServicesSection",
    "<FeaturedWork",
    "<ProcessSection",
    "<AboutBanner",
    "<ExperienceSection",
    "<CTASection",
  ];

  let previous = -1;
  for (const section of sections) {
    const position = page.indexOf(section);
    assert.notEqual(position, -1, `${section} must be rendered`);
    assert.ok(position > previous, `${section} must follow the expected order`);
    previous = position;
  }

  assert.doesNotMatch(page, /Testimonials/);
});

test("freelance portfolio copy is present and agency copy is gone", async () => {
  const sources = (
    await Promise.all(
      ["lib/constants.ts", "config/site.ts"].map(read),
    )
  ).join("\n");

  for (const copy of [
    "AVAILABLE FOR FREELANCE",
    "I build AI agents",
    "AI Agents & Automation",
    "SaaS & Web Apps",
    "APIs & Backend",
    "BlueFin AI Portal",
    "ChainOps AI",
    "Vendorbay",
    "TokenTrade",
    "Small Day Tech",
    "Tata Consultancy Services",
    "pranavhole02@gmail.com",
  ]) {
    assert.ok(sources.includes(copy), `Missing copy: ${copy}`);
  }

  // No leftover agency identity or invented testimonials anywhere in the app.
  const files = [
    "app/layout.tsx",
    "app/manifest.ts",
    "app/opengraph-image.tsx",
    "app/robots.ts",
    "app/sitemap.ts",
    "components/seo/JsonLd.tsx",
    "components/layout/Footer.tsx",
    "components/ui/InquiryModal.tsx",
    "components/sections/HeroSection.tsx",
    "components/sections/AboutBanner.tsx",
    "components/sections/CTASection.tsx",
    "components/sections/ExperienceSection.tsx",
    "components/sections/FeaturedWork.tsx",
    "components/sections/ServicesSection.tsx",
    "lib/constants.ts",
    "config/site.ts",
  ];
  const everything = (await Promise.all(files.map(read))).join("\n");
  assert.doesNotMatch(everything, /dialex/i);
  assert.doesNotMatch(everything, /Jaipur/);
  assert.doesNotMatch(everything, /John Doe|Sarah Jenkins|Alex Rivera/);
});

test("hero video follows the accessible autoplay media contract", async () => {
  const artwork = await read("components/illustrations/HeroArtwork.tsx");

  for (const attribute of [
    "autoPlay",
    "muted",
    "loop",
    "playsInline",
    'preload="metadata"',
    'aria-hidden="true"',
  ]) {
    assert.ok(artwork.includes(attribute), `Hero video is missing ${attribute}`);
  }

  assert.match(artwork, /i_want_to_redesign_this_in_s\.mp4/);
  assert.match(artwork, /Hero Animation/);
  assert.doesNotMatch(artwork, /controls(?:=|\s|>)/);
});

test("metadata targets freelance AI and full-stack work", async () => {
  const layout = await read("app/layout.tsx");

  assert.ok(layout.includes("Pranav Hole | Freelance AI Engineer & Full-Stack Developer"));
  for (const keyword of [
    "Freelance AI Engineer",
    "Freelance Full Stack Developer",
    "Multi-Agent AI Developer",
    "Next.js Developer",
    "RAG Developer",
  ]) {
    assert.ok(layout.includes(keyword), `Missing SEO keyword: ${keyword}`);
  }
});

test("reference and narrow-mobile responsive contracts are present", async () => {
  const source = (
    await Promise.all([
      "components/sections/HeroSection.tsx",
      "components/sections/ServicesSection.tsx",
      "components/ui/ProjectCarousel.tsx",
      "components/sections/ProcessSection.tsx",
      "components/layout/Footer.tsx",
    ].map(read))
  ).join("\n");

  assert.match(source, /grid-cols-2/);
  assert.match(source, /grid-cols-3/);
  assert.match(source, /grid-cols-5/);
  assert.match(source, /snap-mandatory/);
  assert.match(source, /max-\[(?:390|420|560|640)px\]/);
});
