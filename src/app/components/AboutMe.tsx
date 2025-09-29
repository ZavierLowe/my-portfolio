import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
      <section id='about' className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
      
          <div className="max-w-7xl mx-auto  ">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center  pr-0 md:px-10 ">

                <p className="text-xs font-semibold uppercase tracking-wider text-[#C2C8D6] mt-16">get to know more </p>

                <h2 className="font-bold text-3xl mt-2 md:text-5xl uppercase  text-[#772BE2]">About Me</h2>
                
                <div className="relative mt-0 md:mt-16">
                  <div className="p-6 mt-7  md:p-6  bg-white border border-[#C2C8D6]/50 rounded-[28px] shadow-md hover:shadow-lg transition ">

                    <div className="flex flex-col gap-8 md:flex md:flex-col xl:flex xl:flex-row ">
                      <div className=' object-cover'>

                     <Image className="rounded-[24px] w-full object-cover" alt="me" src={'/images/about-me-pic.png'} width={350} height={300}/>
                      </div>

                     <div className="flex flex-col max-w-lg items-start space-y-4 md:flex">

                     <h3 className="uppercase font-bold text-2xl md:text-3xl ">hey i’m zavier </h3>
                     <p> Call me Zav for short !</p>
                     <p className="text-md md:max-w-md">Im a devloper obsessed with combining design, development, and psychology to craft emails and websites that turn into conversions.My foundation in UX design and psychology helps me understand why people click, buy, and engage, which I bring into every website and email I build. I focus on creating experiences that are visually clear and grounded in how people think and make decisions. <br  /> <span >
                     
                      </span></p><p className='mt-8 md:max-w-md'>
                         Outside of work, I pour my time into music, food, and photography.My favoortie genre is afrobeats, I love Chicken Parm, and the last pic I took was for my cousins Sweet 16 birthday party.

                      </p>
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
  )
}

export default AboutMe