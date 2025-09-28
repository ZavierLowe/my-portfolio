import React from 'react'
import Image from 'next/image'

const SkillsCard = ({title,description}:any) => {
  return (
     <div className='w-full sm:w-1/2 lg:w-full'>
             <div  className="p-4 bg-white border border-[#E9E9E9]/90 rounded-[28px] shadow-md  hover:shadow-lg transition cursor-pointer ">
             <div className='h-[240px]'>

        <Image className='rounded-[20px] object-cover h-[240px]' src={"/images/placeholder-image1.jpg"} width={1800} height={600} alt="" />
             </div>
     
    
    <div className='flex flex-col mt-4 items-center  '>
        <h4 className='text-base  uppercase font-bold'>{title}</h4>
        <p className='text-sm  mt-4 max-w-[225px] text-center text-[#4F5155]'>{description}</p>
    </div>
    </div>
    
     </div>
  )
}

export default SkillsCard