import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './Components/Footer'
// import "react-toastify/dist/ReactToastify.css

{/** in this project i have use the 
  web3forms for getting mail
  toastify for toast message
  and animation for motion framer
   */}

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header />
      <About />
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App