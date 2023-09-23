import React from 'react'
import AwardImage from '../../assets/images/award.png'
import SilverMedal from '../../assets/images/silver_medal.png'
import GoldMedal from '../../assets/images/gold_medal.png'
import BronzeMedal from '../../assets/images/bronze_medal.png'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars'

function Prize() {
    return (
        <section className="bg-[#100B20] bg-cover bg-blend-color-burn relative ">
            <ColoredStars className={`left-[27.5%] top-[10%] scale-50`} />
            <WhiteStars className={`left-[25.5%] bottom-[10%] scale-[0.4]`} />
            <WhiteStars className={`left-[49.5%] top-[30%] scale-90`} />
            <WhiteStars className={`right-[14%] top-[40%] scale-90`} />
            <GreyStars className={`right-[28%] bottom-[10%] scale-75`} />

            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px]  rounded-full bottom-[14%] absolute z-[1]" ></div>


            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[33px] pt-[74px] pb-[150px] gap-x-10'>
                <div className='lg:flex items-center gap-x-[40px]'>

                    <div className='w-full relative z-50'>
                        <div className='lg:hidden block text-center'>
                            <h2 className='font-Clash text-[20px] font-bold max-w-[174px] mx-auto'>Prizes and <span className='text-primary'>Rewards</span></h2>
                            <p className='text-base leading-[27.344px] max-w-[400px]'>Highlight of the prizes or rewards for winners and for participants</p>
                        </div>
                        <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[10%] blur-[80px] md:blur-[150px]  rounded-full -top-[10%] absolute z-[1]" ></div>
                        <img src={AwardImage} alt="" className='z-50 mt-10 lg:mt-0' />
                    </div>
                    <div className='w-full'>
                        <div className='hidden lg:block pl-[124px]'>
                            <h2 className='font-Clash text-[32px] font-bold max-w-[174px]'>Prizes and <span className='text-primary'>Rewards</span></h2>
                            <p className='text-base leading-[27.344px] max-w-[400px]'>Highlight of the prizes or rewards for winners and for participants</p>
                        </div>

                        <div className='flex justify-center lg:gap-x-[30px] gap-x-[13px] lg:pt-[270px] pt-[140px]'>

                            <div className='lg:pt-[111px] pt-[41px] lg:pb-[33px] pb-[22px] lg:px-[25px] px-[10px] bg-[#903AFF] bg-opacity-[12%] rounded-lg text-center border border-[#903AFF] relative mb-4'>
                                <div className='absolute lg:-top-24 -top-12 w-[75px] h-[75px] lg:w-full lg:h-full'>
                                    <img src={SilverMedal} alt="" />
                                </div>
                                <div>
                                    <h3 className='lg:text-4xl text-sm font-bold lg:leading-[77.904px] leading-[25.968px]'>2nd</h3>
                                    <h4 className='lg:text-2xl text-sm font-semibold '>Runner</h4>
                                    <h1 className='lg:text-[32px] text-sm font-bold text-primary'>N300,000</h1>
                                </div>

                            </div>

                            <div className='lg:pt-[111px] pt-[41px] lg:pb-[33px] pb-[22px] lg:px-[25px] px-[10px] bg-[#903AFF] bg-opacity-[12%] rounded-lg text-center border border-[#903AFF] relative mt-4'>
                                <div className='absolute lg:-top-[190px] -top-[90px] left-1/2 -translate-x-1/2 lg:w-[296px] w-[125px]'>
                                    <img src={GoldMedal} alt="" />
                                </div>
                                <div>
                                    <h3 className='lg:text-4xl text-sm font-bold lg:leading-[77.904px] leading-[25.968px]'>1st</h3>
                                    <h4 className='lg:text-2xl text-sm font-semibold '>Runner</h4>
                                    <h1 className='lg:text-[32px] text-sm font-bold text-[#903AFF]'>N400,000</h1>
                                </div>

                            </div>

                            <div className='lg:pt-[111px] pt-[41px] lg:pb-[33px] pb-[22px] lg:px-[25px] px-[10px] bg-[#903AFF] bg-opacity-[12%] rounded-lg text-center border border-[#903AFF] relative mb-4'>
                                <div className='absolute lg:-top-24 -top-12 w-[75px] h-[75px] lg:w-full lg:h-full'>

                                    <img src={BronzeMedal} alt="" />
                                </div>
                                <div>
                                    <h3 className='lg:text-4xl text-sm  font-bold lg:leading-[77.904px] leading-[25.968px]'>3rd</h3>
                                    <h4 className='lg:text-2xl text-sm  font-semibold '>Runner</h4>
                                    <h1 className='lg:text-[32px] text-sm font-bold text-primary'>N150,000</h1>
                                </div>

                            </div>



                        </div>
                    </div>




                </div>
            </div>

        </section>
    )
}

export default Prize
