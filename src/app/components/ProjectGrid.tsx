import React from 'react'
import Projects from "../ProjectDetails";
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
  return (
    
       <section id="projects" className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
      
          <div className="max-w-7xl mx-auto  md:pt-30">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center  pr-0 md:px-10">

                <p className="text-xs font-semibold uppercase text-[#C2C8D6] mt-12 md:mt-24">emails and web development</p>

                <h2 className=" text-2xl mt-2 font-bold md:text-5xl uppercase ">Work Samples</h2>
                
                <div className="relative mt-7 md:mt-0">
                  <div className=" mt-4 md:mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:grid md:grid-cols-2">
                          <ProjectCard link={"https://snifco-promotional.netlify.app/"}   name={Projects[0].name} imgSrc={Projects[0].imgSrc} year={2025}/>
                          <ProjectCard link={"https://sorella-email.netlify.app/"}  name={Projects[1].name} imgSrc={Projects[1].imgSrc} year={2025}/>
                           <ProjectCard link={"https://macys-transactional-email.netlify.app/"}  name={Projects[2].name} imgSrc={Projects[2].imgSrc} year={2025}/>
                            <ProjectCard link={"https://www.thedxcproductions.com/"}  name={Projects[3].name} imgSrc={Projects[3].imgSrc} year={2025}/>

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