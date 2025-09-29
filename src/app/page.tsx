
import NavBar from "./components/NavBar"

import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="">
      {/* <div className="flex items-center justify-center mt-12">
        <div className="bg-white p-4 border border-[#F4F4F4] ">
           <Image className='rounded-sm' src="/images/personal-pic.png" width={100} height={125} alt="" />
        </div>
      
   
      </div> */}
      <Hero/>

      <div className=" border-1 border-[#C2C8D6]/50"></div>
      <Skills/>
      <div className=" border-1 border-[#C2C8D6]/50"></div>
      <ProjectGrid/>
            <div className=" border-1 border-[#C2C8D6]/50"></div>

      

       <AboutMe />
     <div className=" border-1 border-[#C2C8D6]/50"></div>
     <ContactMe/>
    
   <NavBar/>
    </div>
  );
}
