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
                        <SkillsCard imageSrc='/images/skills-card-1.png' title={"Email Design & Development"} description={"I design and code responsive emails that engage customers and drive conversions. Each template is crafted to look great across devices and inboxes."}/>

                          <SkillsCard imageSrc='/images/skills-card-2.png' title={"content management"} description={"I manage and optimize content to keep websites clear, fresh, and effective. This ensures your brand communicates consistently and professionally."}/>

                            <SkillsCard imageSrc='/images/skills-card-3.png' title={"Shopify Development"} description={"I build custom Shopify stores that simplify shopping and boost sales. Every site is designed for speed, usability, and maximum conversion."}/>

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