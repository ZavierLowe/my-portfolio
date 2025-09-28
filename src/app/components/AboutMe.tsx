import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
      <section className="   ">
          <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
      
          <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
      
          <div className="max-w-7xl mx-auto  md:pt-30">
            <div className="pl-2 pr-2">
              <div className="flex flex-col justify-center items-center gap-4 pr-0 md:px-10">

                <p className="text-xs font-semibold uppercase text-[#C2C8D6] mt-16">get to know more </p>

                <h2 className="font-bold text-5xl uppercase mt-2 text-[#772BE2]">About Me</h2>
                
                <div className="relative mt-16 md:mt-0">
                  <div className="p-6 mt-7 bg-white border border-[#C2C8D6]/50 rounded-[28px] shadow-md hover:shadow-lg transition ">

                    <div className="flex flex-col gap-8 md:flex">
                     <Image className="rounded-[24px]" alt="me" src={'/images/about-me-pic.png'} width={320} height={500}/>

                     <div className="flex flex-col max-w-lg items-start space-y-4">

                     <h3 className="uppercase font-bold">hey i’m zavier </h3>
                     <p> Call me Zav for short !</p>
                     <p className="text-md">I combine design, coding, and behavioral science to help businesses grow smarter`an Email Developer with a sharp eye for crafting responsive, pixel-perfect HTML table emails—whether built from scratch or based on a reference design. I’m skilled in tools like Figma and Photoshop, and I’m experienced across platforms including Shopify, WordPress, Google Analytics, Litmus, Klaviyo, AMPScript, and Cursor AI.Outside of development, I’m passionate about art, music, and exploring the world. Traveling, staying active, and connecting with different cultures are core to who I am, I’m always curious, always learning.</p>
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