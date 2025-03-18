import Image from "next/image";
import Navbar from "./Component/Navbar";
import Top from "./Component/FrontPage/Top";
import Second from "./Component/FrontPage/Second";
import About from "./Component/FrontPage/About";
import Scroll from "./Component/FrontPage/Scroll";
import Brands from "./Component/FrontPage/Brands";
import Footer from "./Component/FrontPage/Footer";
import Mission from "./Component/FrontPage/Mission";
import Vision from "./Component/FrontPage/Vision";
import Slideshow from "./Component/FrontPage/Slideshow";

export default function Home() {
  return (
    <div className=" overflow-x-hidden bg-black select-none">
     <Navbar/>
     <Top/>
     <div className=" bg-blue-50">
     <Second/>
     <About/>
     <Slideshow/>
     <Mission/>
     <Vision/>
     <Scroll/>
     <Brands/>
     <Footer/>
     </div>
    </div>
  );
}
