import { useRef } from "react";
import Card from "../components/Card.jsx";
import { Globe } from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import {Frameworks} from "../components/Frameworks.jsx";
const About = () => {
    const grid2container=useRef();
    return (
      <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="flex items-end grid-default-color grid-1">
            <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[6rem] -top-[1rem] md:scale-[3] md:left-50 md:insert-y-10 lg:scake[2.5] "/>
            <div className="z-10">
                <p className="headtext">Hi, I am Towfiq Ul Iqbal</p>
                <p className="subtext">A passionate Web Application Enthusiaist.Though I have started late, I have some experiences in Laravel Backend and React.js Frontend Web Applications</p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg gradient-to-t from-indigo"></div>
          </div>
          {/* Grid 2 */}
          <div className="grid-default-color grid-2">
            <div ref={grid2container} className="flex items-center justify-center h-full w-full">
                <p className="flex items-end text-5xl text-gray-500">
                Code is Magic, Code is Craft
                </p>
                <Card style={{rotate:"75deg" ,top:"30%", left:"20%"}} text="Grasp"/>
                <Card text="Solid" style={{rotate:"-30deg" ,top:"40%", left:"40%"}} containerRef={grid2container}/>
                <Card text="Design patterns" style={{rotate:"90deg" ,top:"30%", left:"60%"}} containerRef={grid2container}/>
                <Card text="Design Pattersn" style={{rotate:"25deg" ,top:"60%", left:"10%"}} containerRef={grid2container}/>
                <Card text="SRP" style={{rotate:"35deg" ,top:"58%", left:"80%"}} containerRef={grid2container}/>
                <Card image="assets/logos/csharp-pink.png" style={{rotate:"35deg" ,top:"58%", left:"50%"}} containerRef={grid2container}/>
                <Card image="assets/logos/dotnet-pink.png" style={{rotate:"-45deg" ,top:"70%", left:"25%"}} containerRef={grid2container}/>
                <Card image="assets/logos/blazor-pink.png" style={{rotate:"90deg" ,top:"20%", left:"85%"}} containerRef={grid2container}/>
            </div>    
          </div>
          {/* Grid 3 */}
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">Location</p>
                <p className="subtext">I am from Dhaka, bangladesh Open to learn and collaborate worldwide</p>
                <div style={{ left: "60%", top: "80%", transform: "translate(-50%, -50%)" }} className="absolute inset-0 flex items-center justify-center">
                    <Globe />
                </div>

            </div>
          </div>
          {/* Grid 4 */}
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center
            justify-center gap-2 size-full">
                <p className="headtext">Want to collaborate on exciting projects or any queries?  
                </p>
                <p className=" text-4xl">Just Send Me a Mail!!</p>
                <CopyEmailButton />

            </div>
          </div>
          {/* Grid 5 */}
          <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">Tech Stack</p>
                <p className="subtext">I am currently learning and working or have speciaized skills with the following frameworks to build Robust and Scalable Applications</p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks/>
            </div>
          </div>
        </div>  
      </section>
    );
  };
  
  export default About;
  