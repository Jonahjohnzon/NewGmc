import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center  bg-blue-950' >
        <div className=' py-10 flex flex-col md:flex-row w-[90%] xl:w-2/3 justify-between'>
            <div className='hidden xl:flex'>
                <div><img src='/LOGO.jpg' className=' w-28'/></div>
            </div>
            <div>
                <h1 className='  sm:text-xl font-semibold mb-3 '>Get In Touch</h1>
                <div className=' text-sm sm:text-base flex flex-col w-1/2 mb-10 md:mb-0  '>
                    <p>NO. 11, ROAD 7, SUNVIEW ESTATE, OPPOSITE CROWN ESTATE, SANGOTEDO-AJAH, , SANGOTEDO-AJAH, LAGOS STATE</p>
                    <p>gmercycrownlimitedcso@gmail.com</p>
                </div>
            </div>
            <div>
                <h1 className='  sm:text-xl font-semibold mb-3 whitespace-nowrap  '>Quick Link</h1>
                <div className='text-sm sm:text-base '>
                <p className=' flex flex-col w-1/2 '>Home</p>
                <p className=' flex flex-col w-1/2 '>Application</p>
                <p className=' flex flex-col w-1/2 '>About Us</p>
                </div>
            </div>
        </div>
        <div className=' w-full flex justify-center bg-blue-950 py-2 '><div className=' w-[90%] xl:w-2/3 flex items-center text-sm'><p className=' mr-5'>&copy; Copyright</p><p>GMC</p></div></div>
    </div>
  )
}

export default Footer