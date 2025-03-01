import React from 'react'
import { useRouter } from 'nextjs-toploader/app';
import { ImCancelCircle } from "react-icons/im";

const Menu = ({setIsMenuOpen}) => {
    const router = useRouter()

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

      const Close =()=>{
        setIsMenuOpen(false)
      }

  return (
    <div className=' absolute  top-0 right-0 bg-blue-950 w-full h-[100vh]'>
        <div className=' w-full flex justify-end  px-5 pt-5'>
            <div onClick={Close} className=' text-3xl'><ImCancelCircle/></div>
        </div>
            <ul className="flex flex-col w-full font-semibold justify-between  py-5 pl-4 ">
            <li className="cursor-pointer mb-3 hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={() =>{
                setIsMenuOpen(false) 
                scrollToSection('home')}}>
              Home
            </li>
            <li className="cursor-pointer mb-3 hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={() =>{ 
                setIsMenuOpen(false)
                router.push(`/employmentform`)}}>
                Employment Form
            </li>
            <li className="cursor-pointer mb-3 hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={() =>{ 
                setIsMenuOpen(false)
                router.push(`/guarantorform`)}}>
                Guarantor Form
            </li>
            <li 
              className="cursor-pointer mb-3 hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out"
              onClick={() =>{
                setIsMenuOpen(false) 
                scrollToSection('about')}}
            >
              About Us
            </li>
            <li className="cursor-pointer mb-3 hover:scale-105 hover:text-blue-500 transition-all duration-300 ease-in-out" onClick={()=>{
              setIsMenuOpen(false)
              router.push('/contact')
            }}>
              Contact
            </li>
          </ul>
    </div>
  )
}

export default Menu