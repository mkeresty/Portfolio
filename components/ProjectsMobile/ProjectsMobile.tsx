"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

type Props = {
  data: any;
};

const ProjectsMobile = ({ data }: Props) => {
  const projects = data.projectsData;
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % projects.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + projects.length) % projects.length),
    trackMouse: true,
  });

  const project = projects[index];

  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[rgb(36,36,36)] text-gray-800 dark:text-white px-4 py-24 flex flex-col items-center justify-start overflow-x-hidden">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-2">
        Projects
      </h3>
      <p className="mb-6 text-sm text-gray-500 tracking-wide uppercase">Swipe left/right to explore</p>

      <div {...swipeHandlers} className="relative w-full max-w-[350px] h-[520px] overflow-visible">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute w-full h-full bg-white dark:bg-[#1f1f1f] shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col items-center justify-start"
          >
            <a href={project.projectLink} target="_blank" rel="noreferrer" className="w-full h-full flex flex-col items-center">
              <div className="w-full flex justify-center">
                <Image
                  src={project.projectImage}
                  alt={project.projectName}
                  width={300}
                  height={200}
                  className="rounded-md border border-gray-300"
                />
              </div>
              <p className="text-center mt-4 font-semibold text-[20px] text-[#F7AB0A]">
                {project.projectName}
              </p>
              <p className="text-center text-sm text-[#F7AB0A]">
                {project.projectDuration}
              </p>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center">
                {project.projectDesc}
              </p>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex gap-2">
        {projects.map((_: any, i: React.Key | null | undefined) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#F7AB0A]" : "bg-gray-400"} transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMobile;
