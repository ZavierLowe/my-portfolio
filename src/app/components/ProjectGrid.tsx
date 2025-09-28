import React from 'react'
import Projects from "../ProjectDetails";
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
  return (
    
       <section className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
      
          <div className="max-w-7xl mx-auto  md:pt-30">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center gap-4 pr-0 md:px-10">

                <p className="text-xs font-semibold uppercase text-[#C2C8D6] mt-24">emails and wev development</p>

                <h2 className="font-bold text-5xl uppercase my-4">Work Samples</h2>
                
                <div className="relative mt-16 md:mt-0">
                  <div className=" mt-16 grid grid-cols-2 gap-x-10 gap-y-10">
                          <ProjectCard  name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2023}/>
                          <ProjectCard  name={Projects[1].name} imgSrc={Projects[1].imgSrc} year={2025}/>
                           <ProjectCard  name={Projects[1].name} imgSrc={Projects[1].imgSrc} year={2025}/>
                            <ProjectCard  name={Projects[1].name} imgSrc={Projects[1].imgSrc} year={2025}/>

                  </div>
                
      
             
              </div>
      
               
               
              </div>
              
      
            </div>
          </div>
          </div>
          </div>
         
      
        
        </section>
  )
}

export default ProjectGrid