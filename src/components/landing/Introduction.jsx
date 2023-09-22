import React from 'react'
import Arrow from '../../assets/svgs/arrow.svg'
import { ColoredStars } from '../common/Stars'

function Introduction() {
    return (
        <section name={`/#Overview`} id='Overview' className='relative'>
            <ColoredStars className={`left-[15%] top-[30%] scale-50`} />
            <ColoredStars className={`right-[15%] top-[25%] scale-75`} />
            <div className='max-w-[1512px] mx-auto px-[128px] mt-[62px] mb-[78px]'>
                <div className='flex items-center gap-x-[110px]'>

                    <div className='relative'>
                        <div className='bg-idea w-[490px] h-[477px] flex justify-center items-center bg-cover'>
                            <p className='text-2xl font-bold leading-[29.4px] max-w-[144px] text-center mt-8'>The Big Idea!</p>
                        </div>
                        <img src={Arrow} alt="" className='absolute -right-7 -bottom-4' />
                    </div>
                    <div>
                        <div className='text-[32px] leading-none font-Clash'>
                            <h2 className='max-w-[398px]'>Introduction to getlinked <span className='text-primary'>tech Hackathon 1.0</span></h2>

                        </div>
                        <div className='mt-4'>
                            <p className='text-sm leading-[27.5px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                                clear as day: to shape the future. Whether you're a coding genius, a
                                design maverick, or a concept wizard, you'll have the chance to transform
                                your ideas into reality. Solving real-world problems, pushing the boundaries
                                of technology, and creating solutions that can change the world,
                                that's what we're all about!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='border border-line'></div>

        </section>
    )
}

export default Introduction