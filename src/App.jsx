// run rafce to quickly create componnents.
import React from 'react' 
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/* litreally just a div with a class name of container, mx-auto=horizontally centers whatever the div, and max-w-7xl=size(width) of the div */}
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Testimonial/>
    {/* <Contact /> */}
    <Footer/>
  
    </div>
  )
}

export default App