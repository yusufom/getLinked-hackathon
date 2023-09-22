import React from 'react'
import PrivacyImage from '../../assets/images/privacy.png'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars'

function Privacy() {
    return (
        <section className='relative'>


            <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[400px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full bottom-[4%] absolute z-[1]" ></div>
            <div className='max-w-[1512px] mx-auto px-[128px] pt-[93px] pb-[167px] gap-x-10'>
                <div className='flex items-center gap-x-[50px]'>
                    <div className='w-full relative'>
                        <ColoredStars className={`-left-[14.5%] bottom-[20%] scale-75`} />
                        <GreyStars className={`left-[54.5%] -top-[1%] scale-75`} />
                        <ColoredStars className={`right-[3.5%] top-[11%] scale-50`} />
                        <div className=''>

                            <h2 className='text-[32px] font-Clash font-bold max-w-[300px]'>Privacy Policy and <span className='text-primary'>Terms</span></h2>
                            <p className='text-sm leading-[27.5px] mt-[17px]'>Last updated on September 12, 2023</p>
                            <p className='text-sm leading-[26.376px] mt-[30px] max-w-[438px]'>Below are our privacy & policy, which outline a lot of goodies.
                                it’s our aim to always take of our participant</p>

                        </div>

                        <div className='mt-[70px] w-full px-[72px] pt-[60px] pb-[55px] border border-primary rounded-[5px] bg-privacy'>
                            <p className='text-sm leading-[30.29px]'>At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose,
                                and safeguard your data when you participate in our tech
                                hackathon event. By participating in our event, you consent
                                to the practices described in this policy.
                            </p>
                            <p className='text-base font-bold leading-[34.624px] text-primary mt-6'>Licensing Policy</p>
                            <p className='font-bold leading-[30.29px]'>Here are terms of our Standard License:</p>

                            <ul className="list-image-checkmark grid place-items-center pl-5 mt-6">
                                <li className='pl-[14px]'>
                                    <p className='text-sm leading-[30.29px]'>The Standard License grants you a non-exclusive right to
                                        navigate and register for our event</p>
                                </li>

                                <li className='pl-[14px]'>
                                    <p className='text-sm leading-[30.29px]'>You are licensed to use the item available at any free source
                                        sites, for your project developement</p>
                                </li>
                            </ul>

                            <div className='mt-[20px] text-center'>
                                <button className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded'>Read More</button>
                            </div>


                        </div>
                    </div>
                    <div className='w-full relative'>
                        <WhiteStars className={`right-[23.5%] top-[17%] scale-50`} />
                        <ColoredStars className={`left-[23.5%] top-[60%] scale-50`} />
                        <WhiteStars className={`left-[15.5%] top-[73%] scale-50`} />
                        <GreyStars className={`right-[1%] top-[77%] scale-75`} />
                        <img src={PrivacyImage} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Privacy
