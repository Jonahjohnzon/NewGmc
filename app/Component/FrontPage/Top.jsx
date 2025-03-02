"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Top() {
  const images = ["/list/bg.jpg", "/list/bg2.jpg", "/list/bg.webp"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 30000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100vw] overflow-hidden" id="home">
      {/* Background Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentImage]}
          initial={{ opacity: 0.4, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative  flex justify-center min-h-screen md:justify-start text-center md:text-start z-10 w-full px-5 sm:px-10 lg:px-40 py-32 sm:py-40">
        <div className=" sm:w-[90%] lg:w-[70%] xl:w-[60%]">
          <h1 className=" text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold sm:font-semibold mb-2">We Are</h1>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mb-7 text-blue-400">
            GMC SERVICES LIMITED
          </h1>
          <h2 className=" text-xl text-center sm:text-start sm:text-4xl 2xl:text-6xl font-semibold py-4 border-y-blue-500 border-y-[4px] mb-7">
            #GMC Security Servicing
          </h2>
          <p className="text-lg 2xl:text-xl px-2 font-medium backdrop-blur-md">
            We are a professional security servicing company providing quality
            and innovative all-round security services to the satisfaction of
            our clients whilst promoting employees' self-actualization and
            welfare, and increasing shareholders' value.
          </p>
        </div>
      </div>
    </div>
  );
}
