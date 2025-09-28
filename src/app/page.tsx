import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./components/NavBar"
import Projects from "./ProjectDetails";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="o ">
      {/* <div className="flex items-center justify-center mt-12">
        <div className="bg-white p-4 border border-[#F4F4F4] ">
           <Image className='rounded-sm' src="/images/personal-pic.png" width={100} height={125} alt="" />
        </div>
      
   
      </div> */}
      <Hero/>

      <div className=" border-1 border-[#C2C8D6]/50"></div>
      <ProjectGrid/>
      <div className=" border-1 border-[#C2C8D6]/50"></div>

       <AboutMe/>
     <div className=" border-1 border-[#C2C8D6]/50"></div>
       <section className="   ">
               <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
           
               <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
           
               <div className="max-w-7xl mx-auto  md:pt-30">
                 <div className="pl-2 pr-2">
                   <div className="flex flex-col justify-center  gap-4 pr-0 md:px-10">
     
                     <p className="text-xs font-semibold uppercase text-[#C2C8D6] ml-2 mt-16">want to learn more </p>
     
                     <h2 className="font-bold text-5xl uppercase mt-2">Contact Me</h2>
                     
                     <div className="relative mt-16 md:mt-0">
                       <div className="p-6 mt-7 bg-white border border-[#C2C8D6]/50 rounded-[28px] shadow-md hover:shadow-lg transition cursor-pointer">
     
                         <div className="flex gap-8">
                          <div className=" flex flex-col p-6 gap-5">
                              <h3 className="uppercase font-bold max-w-xs">Curious on what I could do for your company? </h3>
                          <p className="max-w-xs">Just shoot me an email and I’ll answer your questions promptly.
                              Hope to hear from you soon!</p>

                              <div className="bg-[#772BE2] p-3 text-center rounded-sm max-w-sm">
                                <p className="uppercase font-bold text-[#FFFBED] text-xl tracking-wide">zavier.lowe@gmail.com</p>
                              </div>

                          </div>
                        
     
                          <div className="flex flex-col max-w-lg items-start space-y-4">
     
                          
                          </div>
     
                         </div>
                           
     
                       </div>
                     
           
                  
                   </div>
           
                    
                    
                   </div>
                   
           
                 </div>
               </div>
               </div>
               </div>
              
           
             
             </section>
    
   <NavBar/>
    </div>
  );
}
