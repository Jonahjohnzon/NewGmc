"use client"
import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Scroll = () => {
    const data = [
        {image:'/pic6.jpg'},
        {image:'/pic7.jpg'},
        {image:'/pic9.jpg'},
        {image:'/pic1.jpg'},
        {image:'/pic2.jpg'},
    ]
    const swipes = useRef(null);

    const handleNext = useCallback(() => {
        if (!swipes.current) return;
        swipes.current.swiper.slideNext();
      }, []);
  return (
    <div className=" pt-7 sm:pt-0 flex flex-col sm:flex-row justify-between  items-center bg-blue-950">   
    <div className="sm:w-full flex items-center justify-end">
      <div className=" text-4xl sm:text-6xl sm:ml-20 cursor-pointer" onClick={handleNext}><FaAngleDoubleLeft/></div>
        </div> 
    <div className=" w-[95%] md:w-[70%] sm:ml-20  pt-10  text-white ">
    <div className=" flex w-full">
      <Swiper
        ref={swipes}
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
      }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        scrollbar={{
          draggable: true,
        }}
      >
        {data.map((e,i) => {
          //returning images
          return (
            <SwiperSlide key={i}>
                <div className=" min-h-[80px]">
              <img
                key={i}
                src={e.image}
                loading="lazy"
                className=" rounded-md h-80 w-96 object-cover"
                
              />
              </div>
            </SwiperSlide>
          );
        })}
        <div className=" h-10"></div>
      </Swiper>
    </div>
  </div></div>
  )
}

export default Scroll