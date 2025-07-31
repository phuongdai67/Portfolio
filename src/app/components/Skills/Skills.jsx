"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import { skillList } from "../../../data";
import SectionHeading from "../SectionHeading/SectionHeading";

const MarqueeWrapper = dynamic(() => import("../Marquee/MarqueeWrapper"), {
  ssr: false,
  loading: () => <div className="h-20 bg-gray-100 animate-pulse rounded"></div>,
});

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="// Skills" />
          <div className="h-20 bg-gray-100 animate-pulse rounded"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="// Skills" />
      </div>

      {/* Marquee full width */}
      <div className="relative w-screen -mx-4 md:-mx-8 lg:-mx-20">
        {/* Static background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#ffd18c]/20 via-[#ffd18c]/40 to-[#ffd18c]/20"
          style={{
            background: `linear-gradient(90deg, rgba(255, 209, 140, 0.2) 0%, rgba(255, 209, 140, 0.4) 50%, rgba(255, 209, 140, 0.2) 100%)`,
            boxShadow: "0 0 20px rgba(255, 209, 140, 0.3)",
          }}
        />

        {/* Marquee content */}
        <MarqueeWrapper className="relative overflow-hidden">
          <div className="flex gap-8 lg:gap-24 relative z-10">
            {skillList.map((skill, index) => (
              <span
                key={index}
                className="font-inter text-primary-content flex items-center text-xs lg:text-base"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className="mx-2 size-11 lg:size-14"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </MarqueeWrapper>
      </div>
    </section>
  );
};

export default Skills;
