import { FlipWords } from "./FlipWords"
import {motion} from "motion/react"

const HeroText = () => {
const words = ["Secure", "Modern", "Scalable"];
const pcvariants={
    hidden:{opacity:0, x:-50},
    visible:{opacity:1, x:0},
};
const mobvariants={
    hidden:{opacity:0, y:-50},
    visible:{opacity:1, y:0},
};
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
            variants={pcvariants}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}>
                Assalamu Alaikum.I am Towfiq
            </motion.h1>
            <div className="flex flex-col items-start ">
                <motion.p className="text-5xl font-medium text-neutral-400"
                variants={pcvariants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>A Developer <br /> Passionate To Build and Modify Exciting Web Applications And</motion.p>
                <motion.div
                variants={pcvariants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}>
                    <FlipWords words={words}
                    className="font-black text-white text-8xl"/>
                </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                variants={pcvariants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}>Web Solutions</motion.p>
            </div>
        </div>    
        {/*<Mobile View*/}
        <div className="flex-col md:hidden space-y-6">
        <motion.p className="text-4xl font-medium"
        variants={mobvariants}
        initial="hidden"
        animate="visible"
        transition={{delay:1}}>
            Assalamu Alaikum,I am Towfiq.
        </motion.p>
        <div>
            <motion.p className="text-5xl font-black text-neutral-400"
            variants={mobvariants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.2}}>
            Building
            </motion.p>
            <motion.div
            variants={mobvariants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.5}}
            >
                <FlipWords words={words}
                className="font-black text-white text-7xl ml-5"/>
            </motion.div>    
            <motion.p className="text-neutral-400 text-4xl"variants={mobvariants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}
            >Web Applcations</motion.p>
        </div>    
        
        </div>
    </div>
  )
}

export default HeroText