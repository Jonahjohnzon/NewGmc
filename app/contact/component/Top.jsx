"use client"
import React from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from 'nextjs-toploader/app';

const Top = ({Title}) => {
  const router = useRouter()
  const anim = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.5,
        stiffness: 400,
      },
    },
  };

  const Back =() =>{
    router.push('/')
  }
  return (
    <div className="  w-full text-black  font-Inter relative overflow-hidden">
      <div className=" absolute z-10 w-full h-full  bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/list/bg3.png")`}}></div>

      <div className=" flex justify-center bg-black/80 text-white pt-10 pb-10 relative z-20">
      <div className=" top-10 left-10 absolute">
      <IoMdArrowRoundBack className=" text-2xl sm:text-4xl hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer" onClick={Back}/>
      </div>
        <motion.div
          variants={anim}
          initial="hidden"
          animate="animate"
          className="flex justify-center  w-[90%] xl:w-[60%] items-center"
        >
          <div className=" py-10 flex  flex-col items-center">
            <div className=" text-3xl sm:text-6xl font-semibold mb-2 whitespace-nowrap">
              {Title}
            </div>
            <div className="group flex items-center text-sm sm:text-base font-semibold">
            
                <div className=" mr-2  hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer" onClick={Back}>
                  HOME
                </div>
        
              <GoDotFill className="text-green group-hover:text-cream" />
              <div className=" ml-2">{Title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Top;