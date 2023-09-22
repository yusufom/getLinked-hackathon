import React from 'react'
import Sitting from '../../assets/images/sitting.png'
import { GreyStars, WhiteStars } from '../common/Stars'

function Rules() {
    return (
        <section className='relative'>
            <GreyStars className={`left-[35%] top-[25%] scale-75`} />
            <WhiteStars className={`left-[47%] bottom-[25%] scale-90`} />

            
            <div className='max-w-[1512px] mx-auto px-[128px]'>

                <div className='flex items-center gap-x-[48px]'>
                    <div className='w-full'>
                        <h2 className='text-[32px] font-Clash font-bold max-w-[170px]'>Rules and <span className='text-primary'>Guidelines</span></h2>

                        <p className='mt-4 text-sm font-normal leading-[27.5px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a
                            design maverick, or a concept wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!</p>
                    </div>
                    <div className='max-w-[664px] max-h-[664px]'>
                        <img src={Sitting} alt="" />
                    </div>
                </div>

            </div>

            <div className='border border-line'></div>

        </section>
    )
}

export default Rules