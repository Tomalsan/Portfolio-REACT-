import React from 'react'
import ProjectDetails from './ProjectDetails'

const Project = ({
    title,
    description, 
    subDescription, 
    href, 
    image, 
    tags,
    setPreview}) => {
    const[isHideen, setIsHidden] = React.useState(false);
  return (
    <>
    <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'
    onMouseEnter={()=>setPreview(image)}
    onMouseLeave={()=>setPreview(null)}
    >
        <div>
        <p className='text-2xl'>
            {title}</p>
         <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag)=>(
                <span key={tag.id}>{tag.name}</span>
            ))}
         </div>
        </div>
        <button onClick={()=>setIsHidden(true)}className='flex items-center gap-1 cursor-pointer hover-animation'>
            Read More
            <img src='assets/arrow-right.svg' alt='arrow right' className='w-6 h-6' />
        </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-[1px] w-full'/>
    {isHideen&&(<ProjectDetails 
    title={title} 
    description={description}
    subDescription={subDescription}
    image={image} 
    tags={tags} 
    href={href}
    closeModel={()=>setIsHidden(false)}
    />)}
    </>
  )
}

export default Project