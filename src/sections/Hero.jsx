
import { HeroChracter } from "../components/HeroChracter"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import * as THREE from 'three';

const Hero = () => {
  return (
    <section id='home' className="flex items-start justify-center md:items-start md:justify start min-h-screen overflow-hidden c-space">
        <div className="z-10">
        <HeroText />
        <ParallaxBackground />
        </div>
        
        <figure className="absolute inset-0"
        style={{width: "100%", height: "100%"}}>
            <Canvas>
                <HeroChracter />
             </Canvas>   
        </figure>
    </section>
  )
}

export default Hero