"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 5,
    src: "/pic20.jpg",
    text: `GMC is a Private detectives and investigators we gather, analyze, and report information to clients regarding legal or personal matters. Our services include verifying people's backgrounds, finding missing persons, and investigating crimes.`,
  },
  {
    id: 6,
    src: "/pic21.jpg",
    text: `GMC does Security investigations this play a crucial role in crime investigations by gathering evidence, interviewing witnesses, and ensuring the safety and security of individuals and property.`,
  },
  {
    id: 7,
    src: "/pic22.jpg",
    text: `GMC provide CCTV camera installation services, specializing in security system installations for both homes and businesses, including planning, installation, and potentially maintenance.`,
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); // 30 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" flex flex-col items-center rounded-md w-full bg-blue-950 mb-10 max-w-3xl mx-auto p-4 py-8">
      <div className="flex justify-between items-center  sm:h-40 md:h-60 rounded-lg overflow-hidden">
      <button
          onClick={prevSlide}
          className="flex justify-center items-center bg-black bg-opacity-50 text-white h-10 w-10 rounded-full hover:bg-opacity-75"
        >
          <FaChevronLeft size={20} />
        </button>
        <div className="  md:min-w-96 h-44 sm:h-64 mx-10 ">
        <img
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          className="object-cover object-left w-full h-full rounded-md overflow-hidden"
        />
        </div>
        <button
          onClick={nextSlide}
          className=" flex justify-center items-center bg-black bg-opacity-50 text-white h-10 w-10 rounded-full hover:bg-opacity-75"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="mt-4 text-center sm:text-lg md:text-xl text-white">
        <p>{slides[current].text}</p>
      </div>
    </div>
  );
}
