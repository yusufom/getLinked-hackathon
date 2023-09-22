import React from 'react'
import HeroMan from '../../assets/images/hero.png'
import Chain from '../../assets/svgs/chain.svg'
import Bomb from '../../assets/svgs/bomb.svg'
import { GreyStars, WhiteStars } from '../common/Stars'

function Hero() {
    return (
        <>
            <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[24%] blur-[80px] md:blur-[150px]  rounded-full top-[20%] absolute z-[-2]" ></div>

            <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[20%] blur-[80px] md:blur-[150px]  rounded-full top-[30%] absolute z-[-2]" ></div>

            <section className='relative'>

                <WhiteStars className={`left-[20%] top-[10%]`}/>
                <GreyStars className={`right-[35%] top-[20%]`}/>
                <GreyStars className={`right-[58%] bottom-[20%]`}/>


                <div className='w-[1164px] h-[801px] bg-metrix absolute bottom-0 right-0 -z-20'></div>
                <div className='border border-line'></div>

                <div className='mt-8 pr-[55px] flex justify-end text-4xl italic font-bold leading-normal'>
                    <p>Igniting a Revolution in<span className='relative after:left-0 inline:flex after:absolute after:-bottom-8 after:block after:content-curved after:w-full '> HR innovation</span></p>
                </div>

                <div className='flex justify-center items-center mt-[50px] pl-[128px]'>
                    <div>
                        <h1 className='font-Clash text-[80px]'>getlinked Te<span className='relative inline-block before:block before:absolute before:content-bulb before:-top-12 before:-right-5 before:w-full'>c</span>h
                        </h1>
                        <div className='flex items-center'>
                            <h1 className='font-Clash text-[80px]'>Hackathon <span className='text-primary'>1.0</span></h1>
                            <img src={Chain} alt="" />
                            <img src={Bomb} alt="" />
                        </div>
                        <div className='text-[20px] leading-[33.2px] max-w-[522px]'>
                            <p>Participate in getlinked tech Hackathon 2023 stand
                                a chance to win a Big prize</p>
                        </div>

                        <div className='mt-10'>
                            <button className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded'>Register</button>
                        </div>

                        <div className='flex gap-x-4 text-[64px] font-Unica leading-[85.12px] mt-[77px]'>
                            <p>00<small className='text-sm'>H</small></p>
                            <p>00<small className='text-sm'>M</small></p>
                            <p>00<small className='text-sm'>S</small></p>
                        </div>
                    </div>

                    <div className="max-w-[828px] w-full h-[720px] bg-cover -z-10 bg-blend-luminosity relative">
                        <div className='w-[670px] h-[641px] bg-cover flex-shrink-0 bg-earth  bg-blend-hard-light -z-30 animate-spin-slow'></div>
                        <img src={HeroMan} alt="" className='w-full h-full absolute top-0 -z-40 grayscale' />
                    </div>

                </div>

                <div className='border border-line'></div>

            </section>

        </>
    )
}

export default Hero