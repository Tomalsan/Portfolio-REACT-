import {motion, useScroll, useSpring, useTransform} from 'motion/react'

const ParallaxBackground = () => {
   const {scrollYProgress} = useScroll();
   const x = useSpring(scrollYProgress,{damping:60, stiffness:30});
   const mountain3Y = useTransform(x, [0, 0.5], ['0%', '70%']);
   const mountain2Y = useTransform(x, [0, 0.5], ['0%', '30%']);
   const mountain1Y = useTransform(x, [0, 0.5], ['0%', '0%']);
   const planetss = useTransform(x, [0, 0.5], ['0%', '-30%']);
  return (
    <section className='absolute inset-0 bg-black/40' >
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background sky */}
            <motion.div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage:"url(/assets/sky.jpg)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
            }}/>
            <motion.div className='absolute inset-0 -z-40'
            style={{
                backgroundImage:"url(/assets/mountain-3.png)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                y: mountain3Y
            }}
             />
               
            {/*planets */}
            <motion.div className='absolute inset-0 -z-30'
            style={{
                backgroundImage:"url(/assets/planets.png)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                x: planetss
            }} />
            <motion.div className='absolute inset-0 -z-20'
            style={{
                backgroundImage:"url(/assets/mountain-1.png)",
                backgroundSize:"cover",
                backgroundPosition:"bottom",
                y: mountain1Y
            }}    
            />
            </div>           
        
    </section >
  )
}

export default ParallaxBackground