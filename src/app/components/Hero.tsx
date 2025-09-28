import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
  <>
  <section className="   ">
    <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>

    <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-56'>

    <div className="max-w-6xl mx-auto  md:pt-30">
      <div className="pl-2 pr-2">
        <div className="flex flex-col justify-center items-center gap-4 pr-0 md:px-10">
          {/* <img src={} alt="logo" width="80" /> */}
          <div className="relative mt-16 md:mt-0">
          

          <div className="relative p-5  bg-white border border-[#E9E9E9] rounded-[28px]  drop-shadow-[1px_2px_50px_rgba(119,43,226,0.20)] lg:p-5">
            {/* <img src={svgRedStar.src} width="80" alt="red-star" className="absolute bottom-1 right-1 z-10" /> */}
            {/* <img src={svgIdea.src} width="60" alt="idea" className="absolute top-16 -left-3 z-10" />   
            <img src={svgString.src} width="50" alt="string" className="absolute -top-6 -right-2 z-10" />              */}
          
             <div id="me" className="  ">
                <Image className='rounded-[24px] object-contain' 
                src={'/images/personal-pic.png'} alt='personal-pic' width={120} height={140}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                
                />
             </div>
             {/* <Bars /> */}
          </div>
        </div>

            <p className="text-md uppercase text-center mt-8  font-semibold lg:text-[16px]"> Hey I’m Zavier —  developer & email strategist.</p>
            <h1 className="text-center text-2xl lg:text-5xl font-semibold text-[#772BE2] ">
             
             I design and code responsive emails that convert. Personalized, on-brand, and optimized for every inbox.
            </h1>
           <div className="flex justify-center mt-8">
            <div className=" relative items-center align-middle">
  
   <a  className=" text-black text-md font-normal flex items-center py-3 px-8 bg-white border-1 border-[#EDEDED] rounded-lg shadow-xs cursor-pointer ">See My Work</a>
   
</div>
            
           </div>
        </div>
        

      </div>
    </div>
    </div>
    </div>
   

    {/* <img src={svgPinkStar.src} alt="start" width="50" className="absolute -bottom-4" /> */}
  </section>
  </>
  )
}

export default Hero