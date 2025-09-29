import React from 'react'

import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    
       <section id='skills' className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-30'>
      
          <div className="max-w-7xl mx-auto  ">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center  pr-0 md:px-10">

                <p className="text-xs font-semibold uppercase text-[#C2C8D6] tracking-wider mt-12 md:mt-24">more on my skills </p>

                <h2 className=" text-2xl mt-2 font-bold md:text-5xl uppercase ">what i can do</h2>
                
                <div className="relative mt-7 md:mt-0">
                  <div className=" mt-4  grid grid-cols-1 gap-x-10 gap-y-10 md:mt-16 md:grid md:grid-cols-3">
                        <SkillsCard title={"Email Design & Development"} description={"From design to code, I create responsive, user-focused emails that engage and convert."}/>

                          <SkillsCard title={"content management"} description={"Customer journey mapping, automation, and campaigns to keep buyers coming back."}/>

                            <SkillsCard title={"Shopify Development"} description={"Custom storefronts designed for usability and optimized for sales."}/>

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

export default Skills