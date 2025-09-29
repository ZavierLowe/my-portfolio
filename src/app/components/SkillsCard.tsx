import React from 'react'
import Image from 'next/image'

type SkillsCardProps = {
  title: string ;
  description: string;
  imageSrc:string;
  
};

const SkillsCard = ({title,description,imageSrc}:SkillsCardProps) => {
  return (
     <div className='w-full sm:w-1/2 lg:w-full'>
             <div  className="p-4 bg-white border border-[#E9E9E9]/90 rounded-[28px] shadow-md  hover:shadow-lg transition cursor-pointer ">
             <div className='h-[250px] bg-[#E9E9E9]/90 rounded-[28px]'>

        <Image className='rounded-[20px] object-fill ' src={imageSrc} width={500} height={200} alt="" />
             </div>
     
    
    <div className='flex flex-col mt-8 items-center  '>
        <h4 className='text-base  uppercase font-bold '>{title}</h4>
        <p className='text-sm  mt-1 max-w-[225px] text-center text-[#4F5155] lg:max-w-2xl lg:p-4'>{description}</p>
    </div>
    </div>
    
     </div>
  )
}

export default SkillsCard