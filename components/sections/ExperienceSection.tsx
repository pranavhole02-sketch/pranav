import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SketchFrame } from "@/components/ui/SketchFrame";
import { Sparkle, StarDoodle } from "@/components/svg/Doodles";
import { EXPERIENCE } from "@/lib/constants";

const rotations = [
  "-rotate-[0.3deg]",
  "rotate-[0.25deg]",
  "-rotate-[0.2deg]",
  "rotate-[0.3deg]",
] as const;

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="relative bg-[#FFF0B0] py-16 md:py-24 px-4 overflow-hidden"
      id="experience"
      style={{
        backgroundImage: "radial-gradient(rgba(23, 23, 42, 0.07) 0.8px, transparent 0.8px)",
        backgroundSize: "16px 16px",
      }}
    >
      <Sparkle className="absolute top-12 left-[8%] w-8 h-8 text-[#7653D8] -rotate-12 max-md:hidden" />
      <StarDoodle className="absolute bottom-12 right-[8%] w-8 h-8 text-[#F6B8B8] rotate-12 max-md:hidden" />

      <div className="mx-auto max-w-[900px]">
        <SectionHeading
          id="experience-heading"
          subtitle="Production work across AI platforms, B2B SaaS and enterprise systems."
          title="Where I've Worked"
          tone="pink"
        />

        <ol className="m-0 mt-10 grid list-none gap-8 p-0">
          {EXPERIENCE.map((job, index) => (
            <li key={job.id}>
              <SketchFrame
                className={`p-6 sm:p-8 ${rotations[index % rotations.length]}`}
                doubleLine
                fill="white"
                shadow="ink"
                shadowX={5}
                shadowY={6}
                variant={(["a", "b", "c", "d"] as const)[index % 4]}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="m-0 font-hand text-[1.6rem] font-black leading-tight text-[#17172A]">
                    {job.role}
                    <span className="font-bold text-muted"> · {job.company}</span>
                  </h3>
                  <p className="m-0 font-hand text-lg font-black text-[#7653D8]">{job.period}</p>
                </div>
                <p className="mt-1 mb-3 text-[0.95rem] font-bold italic text-muted">{job.summary}</p>
                <ul className="m-0 grid gap-2 pl-5 text-[0.98rem] font-bold leading-relaxed text-[#17172A]">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </SketchFrame>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
