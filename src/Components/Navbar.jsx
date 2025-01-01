import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuVisible])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div
        className='container flex items-center mx-auto justify-between bg-transparent py-4 px-6 md:px-20 lg-px-32'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex items-center gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button
          className='hidden md:block bg-white px-8 py-2 rounded-full'
        >SignUp</button>
        <img src={assets.menu_icon}
          className='cursor-pointer md:hidden w-7'
          onClick={() => setMenuVisible(true)}
        />
      </div>

      {/* mobile version */}
      <div className={`md:hidden top-0 right-0 bottom-0 fixed w-full ${menuVisible ? "visible" : "hidden"} overflow-hidden bg-white transition-all`}>
        <div className=" flex justify-end p-6 cursor-pointer" >
          <img
            onClick={() => setMenuVisible(false)}
            src={assets.cross_icon} className='w-6' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a href="#Header"
            onClick={() => setMenuVisible(false)}
            className='px-4 py-2 inline-block'
          >Home</a>
          <a href="#About"
            onClick={() => setMenuVisible(false)}
            className='px-4 py-2 inline-block'
          >About</a>
          <a href="#Projects"
            onClick={() => setMenuVisible(false)}
            className='px-4 py-2 inline-block'
          >Projects</a>
          <a href="#Testimonials"
            onClick={() => setMenuVisible(false)}
            className='px-4 py-2 inline-block'
          >Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar