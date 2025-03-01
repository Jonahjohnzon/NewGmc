"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'nextjs-toploader/app';
import { motion } from "framer-motion";
import { MdOutlineMenu } from "react-icons/md";
import Menu from "./Menu";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <section className="flex relative items-center justify-between p-3">
        <div>
          <img src="/LOGO.jpg" className={`$${
            isScrolled ? "w-10 h-10" : "w-14 sm:w-20 h-14 sm:h-20"
          } transition-all duration-300 ease-in-out`} />
        </div>
        <div className="hidden md:flex w-[60%] xl:w-[40%]">
          <ul className="flex w-full justify-between font-semibold text-xl items-center">
            <li className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={() =>{
                scrollToSection('home')}}>
              Home
            </li>
            <li
              className="relative cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Application
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isDropdownOpen ? "6rem" : 0, opacity: isDropdownOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute overflow-hidden bg-gray-800 rounded-sm shadow-lg p-1"
              >
                <li className="cursor-pointer hover:text-blue-500 whitespace-nowrap text-base p-2 text-white" onClick={() => router.push(`/employmentform`)}>
                  Employment Form
                </li>
                <li className="cursor-pointer hover:text-blue-500 whitespace-nowrap text-base p-2 text-white" onClick={() => router.push(`/guarantorform`)}>
                  Guarantor Form
                </li>
              </motion.ul>
            </li>
            <li 
              className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection('about')}
            >
              About Us
            </li>
            <li className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={()=>{
              router.push('/contact')
            }}>
              Contact
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <MdOutlineMenu 
            className="text-white text-4xl cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </section>
      
      <motion.div 
        initial={{ x: "100%" }} 
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg p-5 z-50"
      >
        <Menu setIsMenuOpen={setIsMenuOpen}/>
      </motion.div>
    </nav>
  );
}