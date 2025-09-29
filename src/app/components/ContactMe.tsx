import React from 'react'
import Image from 'next/image'

const ContactMe = () => {
  return (
      <section id="#Contact" className="">
               <div id='divLineWrapper' className='px-5 max-w-fill  lg:px-[140px] '>
           
               <div className=' mx-auto max-w-7xl border-l border-[#C2C8D6]/50 border-r pb-24'>
           
               <div className="max-w-7xl mx-auto  md:pt-30">
                 <div className="pl-2 pr-2">
                   <div className="flex flex-col justify-center   pr-0 md:px-10">
     
                     <p className="text-xs font-semibold uppercase text-[#C2C8D6] tracking-wider ml-1 md:ml-2 mt-16">want to learn more </p>
     
                     <h2 className="text-3xl font-bold  uppercase mt-2 md:text-5xl">Contact Me</h2>
                     
                     <div className="relative  md:mt-16">
                       <div className="p-4 mt-7 md:p-8 md:mt-7 bg-white  border border-[#C2C8D6]/50 rounded-[20px]  md:rounded-[28px] shadow-md hover:shadow-lg transition cursor-pointer">
     
                         <div className="flex flex-col gap-8 md:flex md:flex-col md:justify-between md:gap-0 xl:flex xl:flex-row xl:justify-between xl:gap-0 ">
                          <div className=" flex flex-col  gap-8">
                              <h3 className="uppercase font-bold text-2xl max-w-xs md:max-w-xl xl:max-w-sm">Curious on what I could do for your company? </h3>
                          <p className="max-w-xs text-lg md:max-w-xl xl:max-w-sm">Just shoot me an email and I’ll answer your questions promptly.
                              Hope to hear from you soon!</p>

                              <div className="bg-[#772BE2] w-full p-3 text-center rounded-xl md:max-w-xl xl:max-w-sm">
                                <p className="text-sm uppercase font-bold text-[#FFFBED] md:text-xl tracking-wide">zavier.lowe@gmail.com</p>
                              </div>

                          </div>
                        
     
                          <div className=" mt-4 grid grid-cols-2 gap-y-5 gap-x-3 md:grid md:grid-cols-2 ">

                             <a href="https://www.linkedin.com/in/zavierlowe/" target='_blank'>

                            <div className="flex justify-center bg-white  h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl md:w-full md:h-[120px] xl:w-[244px]">
                           
                              <Image alt="linkedin-logo" src={"images/linkedin-logo.svg" } width={32} height={42} />
                              
                            </div>
                            </a>
                            
                            <a href="https://github.com/ZavierLowe" target='_blank'>

                               <div className="flex justify-center bg-white  h-[82px] p-4 border border-[#E9E9E9]/50 rounded-lg shadow-sm  md:rounded-3xl md:w-full md:h-[120px] xl:w-[244px]">
                              <Image alt="github-logo" src={"images/github-logo.svg" } width={32} height={36} />
                              
                            </div>


                            </a>
                            <a href="#" target='_blank'>

                               <div className="flex justify-center bg-white h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl md:w-full md:h-[120px] xl:w-[244px]">
                              <Image alt="pdf-logo" src={"images/pdf-icon.svg" } width={32} height={42} />
                              
                              </div>
                            </a>
                            <a href="https://x.com/zavlowe" target='_blank'>


                               <div className="flex justify-center bg-white h-[82px] p-4 border border-[#E9E9E9]/50   rounded-lg shadow-sm  md:rounded-3xl md:w-full md:h-[120px] xl:w-[244px]">
                              <Image alt="x-logo" src={"images/x-logo.svg" } width={32} height={42} />
                              
                            </div>
                         
                            </a>
                            
                      
     
                          
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

export default ContactMe