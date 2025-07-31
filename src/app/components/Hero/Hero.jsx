"use client";
import Image from "next/image";
import { HeroImage } from "../../../utils/image";
import useRoleSwitcher from "../../hooks/useRoleSwitcher";

const Hero = () => {
  //   const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({
    roles: ["FRONTEND DEVELOPER", "GAMER"],
  });
  const defaultRole = "FRONTEND DEVELOPER";

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Nguyễn Phương Đại
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">
              {role || defaultRole}
            </span>
          </h1>

          <h2 className="text-neutral mt-3">
            Crafting innovative solutions to solve real-world problems
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/phuongdai67"
              aria-label="View Github Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 15rem, (min-width: 768px) 10rem, (min-width: 640px) 8rem, 6rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-10"
            />
            {/* <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
