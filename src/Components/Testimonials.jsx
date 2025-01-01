import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <div
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
    id='Testimonials'
    >
        <h1 
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'
        >Customer <span 
        className='underline underline-offset-4 decoration-1 under font-light'> 
         Testimonials</span>
        </h1>
        <p 
        className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Real Stories from Those who Found Home with Us</p>

            <motion.div
            initial={{opacity:0, x:200}}
            transition = {{duration:1.5}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            className='flex flex-wrap justify-center gap-8'
            >
                {
                    testimonialsData.map((testimonial, index)=>(
                        <div 
                        key={index} className='px-5 md:px-0'
                        >
                            <img src={testimonial.image} alt={testimonial.alt}/>
                            <h2 
                            className='text-xl text-gray-700 font-medium'>
                                {testimonial.name}</h2>
                                <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                                <div
                                className='flex justify-center gap-1 text-red-500 mb-4'
                                >
                                    {
                                        Array.from({length: testimonial.rating},(item, index)=>(
                                            <img src={assets.star_icon} key={index} />
                                        ))
                                    }
                                </div>
                                <p className='text-gray-600'>{testimonial.text}</p>
                        </div>
                    ))
                }

            </motion.div>
    </div>
  )
}

export default Testimonials