import { FaLocationArrow } from "react-icons/fa6";

import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      {/**
       *  UI: Spotlights
       *  Updated fill colors to blue tones
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#022555"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#023E73"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#045DAB"
        />
      </div>

      {/**
       *  UI: grid
       *  Changed background and grid overlay to suit the blue theme
       */}
      <div
        className="h-screen w-full dark:bg-[#022555] bg-[#045DAB] dark:bg-grid-[#ffffff]/[0.03] bg-grid-[#022555]/[0.1]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#022555]
         bg-[#045DAB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#022555)]"
        />
        <motion.div
          className="flex justify-center items-center text-[#fff] text-[15rem] opacity-5 font-bold whitespace-nowrap"
          animate={{
            x: ["100%", "-100%"], // Moves completely to the right and reappears from the left
          }}
          transition={{
            duration: 10, // Total time for one full cycle
            ease: "linear", // Linear motion for smooth, constant speed
            repeat: Infinity, // Repeat the animation infinitely
          }}
        >
          DEVMATES
        </motion.div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-[#045DAB] max-w-80">
            Your Partner in Business Growth and Digital Success{" "}
          </p>

          {/**
           *  Text Generate Effect
           *  Updated responsive font sizes and ensured color compatibility
           */}
          <TextGenerateEffect
            words="Designing Your Success, Building Your Future"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-[#029990]"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! We are DevMates, specialized in providing creative solutions.
          </p>

          <a href="#about">
            <MagicButton
              title="Show our works"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
