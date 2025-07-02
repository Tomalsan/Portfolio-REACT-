import React from 'react';
import {motion} from 'motion/react'
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModel
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <motion.div className='relative w-full max-w-3xl max-h-[90vh] border shadow-sm p-6 bg-gradient-to-l rounded-2xl from-midnight to-navy border-white/10 overflow-y-auto' initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      >
        <button
          onClick={closeModel}
          className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'
        >
          <img src='assets/close.svg' className='w-6 h-6' alt="close" />
        </button>
        <img src={image} alt={title} className='w-full rounded-t-2xl max-h-64 object-cover' />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
          <p className='text-sand mb-3 font-normal'>{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className='text-neutral-400 mb-3 font-normal'>{subDesc}</p>
          ))}
          <div className='flex items-center justify-between mt-4'>
            <div className='flex gap-3 flex-wrap'>
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className='rounded-lg size-10 hover-animation'
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation'
            >
              View Project <img src="assets/arrow-up.svg" className='size-4' alt="arrow up" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
