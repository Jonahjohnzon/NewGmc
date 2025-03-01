import React from 'react'
import {  Dosis } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Dosis({ subsets: ['latin'] });



export const metadata = {
  title: "G-MercyCrown",
  description: "We are a professional security Servicing company providing quality and innovative all round security services to the satisfaction of our clients whilst promoting employees self actualization and welfare, and increasing share holders value",
};

const Body = ({children}) => {
  return (
    <body
    className={`${geistSans.className} antialiased `}
    suppressHydrationWarning
  >
        <link rel="icon" href="/LOGO.jpg" sizes="any" />
            <NextTopLoader 
       color="#fffd00"
       initialPosition={0.08}
       crawlSpeed={200}
       height={3}
       crawl={true}
       showSpinner={false}
       easing="ease"
       speed={200}
       shadow="0 0 10px #fffd00,0 0 5px #fffd00"
       className=" z-50"
      />
    <div >
    {children}
    </div>
  </body>
  )
}

export default Body