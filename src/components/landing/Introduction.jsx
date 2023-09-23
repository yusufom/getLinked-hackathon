import React from 'react'
import Arrow from '../../assets/svgs/arrow.svg'
import { ColoredStars } from '../common/Stars'
import { motion } from 'framer-motion'

function Introduction() {
    return (
        <section name={`/#Overview`} id='Overview' className='relative'>
            <ColoredStars className={`left-[15%] top-[30%] scale-50`} />
            <ColoredStars className={`right-[15%] top-[25%] scale-75`} />
            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[63px] lg:mt-[62px] mt-[27px] mb-[78px]'>
                <div className='flex flex-col lg:flex-row items-center gap-x-[110px] gap-y-[58px]'>

                    <motion.div className='relative' initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <div className='bg-idea lg:w-[490px] lg:h-[477px] w-[264px] h-[257px] flex justify-center items-center bg-cover'>
                            <p className='lg:text-2xl text-sm font-bold lg:leading-[29.4px] leading-[17px] lg:max-w-[144px] max-w-[78px] text-center mt-8'>The Big Idea!</p>
                        </div>
                        <img src={Arrow} alt="" className='absolute lg:-right-7 lg:-bottom-4 right-1/2 lg:translate-x-0 translate-x-1/2 lg:scale-100 scale-50' />
                    </motion.div>
                    <motion.div className='mt-[58px] lg:mt-0' initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <div className='lg:text-[32px] text-xl text-center lg:text-left leading-none font-Clash'>
                            <h2 className='lg:max-w-[398px] max-w-[249px] mx-auto lg:mx-0'>Introduction to getlinked <span className='text-primary'>tech Hackathon 1.0</span></h2>

                        </div>
                        <div className='mt-4'>
                            <p className='lg:text-sm text-[13px] leading-[27.5px] text-center lg:text-left'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                clear as day: to shape the future. Whether you're a coding genius, a
                                design maverick, or a concept wizard, you'll have the chance to transform
                                your ideas into reality. Solving real-world problems, pushing the boundaries
                                of technology, and creating solutions that can change the world,
                                that's what we're all about!</p>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className='border border-line'></div>

        </section>
    )
}

export default Introduction