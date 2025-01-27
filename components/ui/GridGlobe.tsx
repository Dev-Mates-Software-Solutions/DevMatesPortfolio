"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#022555", // Updated to primary blue
    showAtmosphere: true,
    atmosphereColor: "#022555", // Updated to primary blue
    atmosphereAltitude: 0.1,
    emissive: "#022555", // Updated to primary blue
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(2, 37, 85, 0.7)", // Semi-transparent variation of primary blue
    ambientLight: "#02648d", // Adjusted lighter blue
    directionalLeftLight: "#022555", // Updated to primary blue
    directionalTopLight: "#022555", // Updated to primary blue
    pointLight: "#022555", // Updated to primary blue
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#022555", "#045f7d", "#0c7b9e"]; // Blue-based color scheme

  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    // ... (rest of the sampleArcs remain unchanged with color logic)
  ];

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;
