import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pranav Hole",
    short_name: "Pranav",
    description:
      "Freelance AI engineer and full-stack developer building multi-agent AI systems, SaaS platforms and scalable backends.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8E8",
    theme_color: "#F6B8B8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

