import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-lg flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="py-6 space-y-6 mt-12 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 selection:text-yellow-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 selection:text-yellow-400 font-normal text-base md:text-lg px-4 text-neutral-300 max-w-lg mx-auto">
          Dive into the comprehensive music courses and transform your musical
          journey today. Wether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-5">
          <Link href="/courses">
            {" "}
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
