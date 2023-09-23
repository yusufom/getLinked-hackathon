import React from 'react'
import HeroMan from '../../assets/images/hero.png'
import Chain from '../../assets/svgs/chain.svg'
import Bomb from '../../assets/svgs/bomb.svg'
import { GreyStars, WhiteStars } from '../common/Stars'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <>
            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[24%] blur-[80px] md:blur-[150px]  rounded-full top-[20%] absolute z-[-2]" ></div>

            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[20%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>

            <section className='relative'>

                <WhiteStars className={`left-[20%] top-[10%] lg:scale-100 scale-50`} />
                <GreyStars className={`lg:right-[35%] lg:top-[20%] right-[10%] top-[10%] lg:scale-100 scale-50`} />
                <GreyStars className={`lg:right-[58%] lg:bottom-[20%] lg:scale-100 scale-[0.3] bottom-[58%] right-[20%]`} />


                <div className='w-[1164px] h-[801px] bg-metrix absolute bottom-0 right-0 -z-20 hidden lg:block'></div>
                <div className='border border-line'></div>

                <motion.div className='mt-8 lg:pr-[55px] flex lg:justify-end justify-center lg:text-4xl text-base italic font-bold leading-normal' initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}>
                    <p>Igniting a Revolution in<span className='relative lg:after:left-0 after:right-7 inline:flex after:absolute lg:after:-bottom-8 after:-bottom-6 after:block after:content-curved after:w-full lg:after:scale-100 after:scale-50'> HR innovation</span></p>
                </motion.div>

                <div className='flex lg:flex-row flex-col justify-center items-center mt-[50px] lg:pl-[128px] lg:pr-0'>
                    <motion.div className='text-center lg:text-left px-[33px] lg:px-0' initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <h1 className='font-Clash lg:text-[80px] text-[32px]'>getlinked Te<span className='relative inline-block before:block before:absolute before:content-bulb before:-top-12 lg:before:-right-5 before:w-full  before:scale-50'>c</span>h
                        </h1>
                        <div className='flex justify-center lg:justify-normal'>
                            <div className='flex items-center text-center lg-text-left'>
                                <h1 className='font-Clash lg:text-[80px] text-[32px]'>Hackathon <span className='text-primary'>1.0</span></h1>
                                <div className='w-[32px] lg:w-[87px]'>
                                    <img src={Chain} alt="" className='' />
                                </div>
                                <div className='w-[32px] lg:w-[87px]'>
                                    <img src={Bomb} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='lg:text-[20px] lg:leading-[33.2px] lg:max-w-[522px] text-xs leading-[21px] max-w-[264px]'>
                            <p>Participate in getlinked tech Hackathon 2023 stand
                                a chance to win a Big prize</p>
                        </div>

                        <div className='mt-10'>
                            <NavLink to={`/register`} >
                                <button className='lg:text-base text-sm leading-normal lg:py-4 py-[14px] lg:px-[52px] px-[48px] bg-primaryLinear rounded'>Register</button>
                            </NavLink>
                        </div>

                        <div className='flex justify-center lg:justify-normal'>
                            <div className='flex gap-x-4 lg:text-[64px] text-[48px] font-normal font-Unica leading-[85.12px] lg:mt-[77px] mt-[14px]'>
                                <p>00<small className='text-sm'>H</small></p>
                                <p>00<small className='text-sm'>M</small></p>
                                <p>00<small className='text-sm'>S</small></p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="lg:max-w-[828px] max-w-[420px] w-full lg:h-[720px] h-[362.395px]  bg-cover -z-10 bg-blend-luminosity relative" initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <div className='lg:w-[670px] lg:h-[641px] w-[328px] h-[294px] bg-cover flex-shrink-0 bg-earth  bg-blend-hard-light -z-30 animate-spin-slow'></div>
                        <img src={HeroMan} alt="" className='w-full h-full absolute top-0 -z-40 grayscale' />
                    </motion.div>

                </div>

                <div className='border border-line'></div>

            </section >

        </>
    )
}

export default Hero