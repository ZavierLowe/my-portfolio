import React from 'react'
import Image from 'next/image'


type ProjectCardProps = {
  imgSrc: string ;
  name: string;
  year: number;
  link: string;
};

const ProjectCard = ({ imgSrc, name, year, link }: ProjectCardProps) => {


  return (

    <div className='w-full sm:w-1/2 md:w-full lg:w-full'>
      <a href={link} target='_blank'>

         <div  className="p-4 bg-white border border-[#F4F4F4] rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ">
    <Image className='rounded-md' src={imgSrc} width={1800} height={600} alt="" />
 

</div>
<div className='flex justify-between mt-4 items-center '>
    <h2 className='text-sm'>{name}</h2>
    <p className='text-sm'>{year}</p>
</div>
      </a>

 </div>

  )
}

export default ProjectCard