import React from 'react'
import Instagram from '../../assets/svgs/socials/instagram.svg'
import X from '../../assets/svgs/socials/x.svg'
import Facebook from '../../assets/svgs/socials/facebook.svg'
import Linkedin from '../../assets/svgs/socials/linkedin.svg'
import Call from '../../assets/svgs/socials/call.svg'
import Location from '../../assets/svgs/socials/location.svg'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars'

function Footer() {
    return (
        <footer className='bg-[#100B20] relative'>
            <WhiteStars className={`left-[7.5%] top-[27%] scale-50`} />
            <GreyStars className={`right-[30.5%] top-[27%] scale-75`} />
            <ColoredStars className={`left-[45.5%] bottom-[22%] scale-50`} />
            <WhiteStars className={`right-[10.5%] bottom-[27%] scale-75`} />

            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[68px] pt-[93px] pb-[1px] gap-x-10'>

                <div className='flex lg:flex-row flex-col justify-between gap-y-[32px] '>

                    <div className='lg:w-1/3'>
                        <p className='font-Clash lg:text-3xl text-xl font-bold leading-normal'>get<span className='text-primary'>linked</span></p>
                        <p className='text-xs leading-5 mt-3 lg:mt-0'>Getlinked Tech Hackathon is a technology innovation program
                            established by a group of organizations with the aim of showcasing
                            young and talented individuals in the field of technology
                        </p>
                        <div className='mt-[74px] flex lg:text-sm text-xs'>
                            <p className='pr-4'>Terms of Use</p>
                            <div className='h-auto w-[2px] bg-primary'></div>
                            <p className='px-4'>Privacy Policy</p>
                        </div>
                    </div>

                    <div className='lg:w-1/3'>
                        <h4 className='text-primary font-semibold text-sm leading-6'>Useful Links</h4>

                        <div className='text-xs leading-5 space-y-4 mt-[6px]'>
                            <p>Overview</p>
                            <p>Timeline</p>
                            <p>FAQs</p>
                            <p>Register</p>
                            <div className='flex items-center gap-x-[18px]'>
                                <p className='text-primary text-sm'>Follow us</p>
                                <img src={Instagram} alt="" />
                                <img src={X} alt="" />
                                <img src={Facebook} alt="" />
                                <img src={Linkedin} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-[30px] lg:mt-0'>
                        <h4 className='text-primary font-semibold text-sm leading-6'>Contact Us</h4>

                        <div className='mt-5 space-y-[22px]'>
                            <div className='flex gap-x-4'>
                                <img src={Call} alt="" />
                                <p className='text-xs leading-normal'>+234 679 81819</p>
                            </div>
                            <div className='flex gap-x-4 items-start'>
                                <img src={Location} alt="" />
                                <p className='text-xs leading-normal max-w-[90px]'>27,Alara Street
                                    Yaba 100012
                                    Lagos State</p>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='text-center my-14'>
                    <p className='text-xs leading-normal'>All rights reserved. © getlinked Ltd.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer