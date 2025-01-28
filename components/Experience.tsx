import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Our <span className="text-[#5AB1FF]">Services</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgb(5, 9, 22) 0%, rgb(33, 57, 82) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-[#E0F3FF] border-[#3A6EA5] shadow-lg"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-[#fff]">
                  {card.title}
                </h1>
                <p className="text-start mt-3 font-semibold text-[#A6CCE3]">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
