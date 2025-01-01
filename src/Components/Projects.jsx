import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardToShow, setCardToShow] = useState(1)

    useEffect(() => {

        const updateCardToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length)
            }
            else {
                setCardToShow(1);
            }
        }
        updateCardToShow();
        window.addEventListener("resize", updateCardToShow)

        return () => window.removeEventListener("resize", updateCardToShow)

    }, [])


    function handleNextProject() {
        setCurrentIndex(preveIndex => (preveIndex + 1) % projectsData.length)
    }
    function handlePreveProject() {
        setCurrentIndex(preveScroll => preveScroll === 0 ? projectsData.length - 1 : preveScroll - 1)
    }
    return (
        <div
            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
            id='Projects'
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'
            >Projects
                <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span>
            </h1>
            <p
                className='text-center text-gray-500 mb-8 max-w-80 mx-auto'
            >Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            {/* slider buttons */}
            <div
                className='flex justify-end mb-8'
            >
                <button
                    className='p-3 bg-gray-200 rounded mr-2'
                    aria-label='Previous Project'
                    onClick={handlePreveProject}
                >
                    <img src={assets.left_arrow} alt='previous project' />
                </button>
                <button
                    className='p-3 bg-gray-200 rounded mr-2'
                    aria-label='Next Project'
                    onClick={handleNextProject}
                >
                    <img src={assets.right_arrow} alt='Next project' />
                </button>
            </div>

            {/* project slider container */}
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='overflow-scroll scrollbar-none'>
                <div
                    className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}
                >
                    {
                        projectsData.map((project, index) => (
                            <div key={index}
                                className='relative flex-shrink-0 w-full sm:w-1/4'
                            >
                                <img
                                    className='w-full h-auto mb-14 rounded-md'
                                    src={project.image}
                                    alt={project.title} />

                                <div
                                    className='absolute left-0 right-0 bottom-5 flex justify-center'
                                >
                                    <div
                                        className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md'>
                                        <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                        <p
                                            className='text-gray-500 text-sm'
                                        >
                                            {project.price} <span className='px-1'>|</span> {project.location}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default Projects