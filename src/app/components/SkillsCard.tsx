import React from 'react'
import Image from 'next/image'

type SkillsCardProps = {
  title: string ;
  description: string;
  imageSrc:string;
  
};

const SkillsCard = ({title,description,imageSrc}:SkillsCardProps) => {
  return (
     <div className='w-full sm:w-1/2 md:w-full lg:w-full '>
             <div  className="p-4 h-full md:h-full  bg-white border border-[#E9E9E9]/90 rounded-[28px] shadow-md  hover:shadow-lg transition cursor-pointer ">
             <div className='flex flex-col space-y-2'>

             <div className='h-[200px]    md:h-[250px] lg:h-[400px] xl:h-[270px]'>

        <Image className=' rounded-[24px] border border-[#E9E9E9]/80 lg:rounded-[32px] object-cover h-[200px] md:h-[250px] md:w-[450px] lg:h-[400px] lg:w-full lg:object-cover  xl:h-full ' src={imageSrc} width={600} height={600} alt="" />
             </div>
     
    
    <div className='flex flex-col mt-4 items-center justify-center md:mt-1 lg:mt-1'>
        <h4 className='text-base uppercase mt-2 font-bold text-center md:text-xl lg:text-xl xl:text-base '>{title}</h4>
        <p className='text-sm   max-w-xs text-center p-2 text-[#4F5155] l md:max-w-md lg:max-w-sm  lg:text-base lg:mt-1 xl:text-md lg:p-4'>{description}</p>
    </div>
    </div>
             </div>
    
     </div>
  )
}

export default SkillsCard