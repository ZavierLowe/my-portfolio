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
                   <div className="flex flex-col justify-center   pr-0 md:px-10">
     
                     <p className="text-xs font-semibold uppercase text-[#C2C8D6] ml-1 md:ml-2 mt-16">want to learn more </p>
     
                     <h2 className="text-3xl font-bold  uppercase mt-2 md:text-5xl">Contact Me</h2>
                     
                     <div className="relative  md:mt-16">
                       <div className="p-4 mt-7 md:p-6 md:mt-7 bg-white border border-[#C2C8D6]/50 rounded-[20px]  md:rounded-[28px] shadow-md hover:shadow-lg transition cursor-pointer">
     
                         <div className="flex flex-col gap-2 md:flex">
                          <div className=" flex flex-col  gap-8">
                              <h3 className="uppercase font-bold text-2xl max-w-xs">Curious on what I could do for your company? </h3>
                          <p className="max-w-xs text-lg">Just shoot me an email and I’ll answer your questions promptly.
                              Hope to hear from you soon!</p>

                              <div className="bg-[#772BE2] w-full p-3 text-center rounded-sm md:max-w-sm">
                                <p className="text-sm uppercase font-bold text-[#FFFBED] md:text-xl tracking-wide">zavier.lowe@gmail.com</p>
                              </div>

                          </div>
                        
     
                          <div className=" mt-4 grid grid-cols-2 gap-y-5 gap-x-3 md:grid md:grid-cols-2 ">

                            <div className="flex justify-center bg-white  h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl">
                              <Image alt="linkedin-logo" src={"images/linkedin-logo.svg" } width={24} height={42} />
                              
                            </div>
                               <div className="flex justify-center bg-white  h-[82px] p-4 border border-[#E9E9E9]/50 rounded-lg shadow-sm  md:rounded-3xl">
                              <Image alt="linkedin-logo" src={"images/github-logo.svg" } width={36} height={36} />
                              
                            </div>
                               <div className="flex justify-center bg-white h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl">
                              <Image alt="linkedin-logo" src={"images/pdf-icon.svg" } width={36} height={42} />
                              
                            </div>

                               <div className="flex justify-center bg-white h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl">
                              <Image alt="linkedin-logo" src={"images/pdf-icon.svg" } width={36} height={42} />
                              
                            </div>
                         
                            
                      
     
                          
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
