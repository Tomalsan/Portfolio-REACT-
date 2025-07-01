// run rafce to quickly create componnents.
import React from 'react' 
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/* litreally just a div with a class name of container, mx-auto=horizontally centers whatever the div, and max-w-7xl=size(width) of the div */}
    <Navbar />
    <Hero />
    <About />
    {/*about*/}
    {/*projects*/}
    {/*experience*/}
    {/*testimonial*/}
    {/*contact*/}
    {/*footer*/}
    
    </div>
  )
}

export default App