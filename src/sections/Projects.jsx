import React from 'react'
import { myProjects } from '../constants'
import Project from '../components/Project'
import { motion, useMotionValue, useSpring } from 'motion/react'

const PREVIEW_WIDTH = 320;  // w-80
const PREVIEW_HEIGHT = 224; // h-56
const OFFSET = 20;

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springx = useSpring(x, { damping: 20, stiffness: 80 });
  const springy = useSpring(y, { damping: 20, stiffness: 80 });

  const handlemouseMove = (e) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let nextX = Math.min(e.clientX + OFFSET, vw - PREVIEW_WIDTH);
    let nextY = Math.min(e.clientY + OFFSET, vh - PREVIEW_HEIGHT);

    nextX = Math.max(nextX, 0);
    nextY = Math.max(nextY, 0);

    x.set(nextX);
    y.set(nextY);
  };

  const [preview, setPreview] = React.useState(null);

  return (
    <section id='work' onMouseMove={handlemouseMove} className='relative c-space section-spacing'>
      <h2 className='text-heading'>My Selected Projects</h2>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'>
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
        {preview && (
          <motion.img
            className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg pointer-events-none w-80'
            style={{ x: springx, y: springy }}
            src={preview}
            alt="Project Preview"
          />
        )}
      </div>
    </section>
  )
}

export default Projects
