import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./components/NavBar"
import Projects from "./ProjectDetails";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="o ">
      {/* <div className="flex items-center justify-center mt-12">
        <div className="bg-white p-4 border border-[#F4F4F4] ">
           <Image className='rounded-sm' src="/images/personal-pic.png" width={100} height={125} alt="" />
        </div>
      
   
      </div> */}
      <Hero/>
      <div className=" h-1 border-t-1 border-[#C2C8D6]/50 "></div>
     
       <section className="mt-40 mx-auto">
        <div className="grid grid-cols-2 gap-x-4 gap-y-32"> 
          
          <ProjectCard  name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2023}/>
           <ProjectCard  name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2023}/>
            <ProjectCard  name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2023}/>
             <ProjectCard  name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2023}/>

        </div>
       
        

        
      </section> 
    
   {/* <NavBar/> */}
    </div>
  );
}
