import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./components/NavBar"
import Projects from "./ProjectDetails";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";

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

         <section className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
      
          <div className="max-w-7xl mx-auto  md:pt-30">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center gap-4 pr-0 md:px-10">

                <p className="text-xs font-semibold uppercase text-[#C2C8D6] mt-24">get to know more </p>

                <h2 className="font-bold text-5xl uppercase my-4">About Me</h2>
                
                <div className="relative mt-16 md:mt-0">
                  <div className="p-4 bg-white border border-[#F4F4F4] rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">

                    <div>
                     <Image src={} width={500} height={500}/>
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
