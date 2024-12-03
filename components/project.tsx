"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/theme-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  stackIcons,
  imageUrl,
  liveDemo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a href={liveDemo} target="_blank">
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[21rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <div className="flex items-center justify-between mt-5 mb-3">
              <div className="flex items-center">
                {stackIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`shadow-md rounded-full ${
                      theme === "light" ? "bg-white" : "bg-[#424242]"
                    } lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center`}
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image
                      src={icon}
                      alt="icon"
                      quality="100"
                      priority={true}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>

              {/* <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div> */}
            </div>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}
