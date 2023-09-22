import React from 'react'
import Liberty from '../../assets/images/partners/liberty.png'
import LibertyPay from '../../assets/images/partners/liberty_pay.png'
import Winwise from '../../assets/images/partners/winwise.png'
import Whisper from '../../assets/images/partners/wisper.png'
import Paybox from '../../assets/images/partners/paybox.png'
import Vuzual from '../../assets/images/partners/vuzual.png'
import { ColoredStars, WhiteStars } from '../common/Stars'


function Partners() {
    return (
        <section className='relative'>
            <ColoredStars className={`left-[22.5%] top-[11%] scale-75`} />
            <ColoredStars className={`right-[45.5%] top-[24%] scale-50`} />
            <WhiteStars className={`right-[45.5%] bottom-[44%]`} />

            <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px]  rounded-full -bottom-[10%] absolute z-[1]" ></div>
            <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[3%] absolute z-[1]" ></div>
            <div className='max-w-[1512px] mx-auto px-[128px] mt-[114px] pb-[150px] gap-x-10'>
                <div className='text-center'>
                    <h2 className='font-Clash text-[32px] font-bold leading-[27px]'>Partners and Sponsors</h2>
                    <p className='mt-[22px] text-sm leading-[27px] max-w-[452px] mx-auto'>Getlinked Hackathon 1.0 is honored to have the following major
                        companies as its partners and sponsors</p>

                </div>

                <div className='mt-[65px] py-[143px] px-[176px] grid grid-cols-3 mb-[272px] border border-primary rounded-sm'>

                    <div className='box box-top'>
                        <img src={Liberty} alt="" />
                    </div>

                    <div className='box box-top'>
                        <img src={LibertyPay} alt="" />
                    </div>

                    <div className='box box-top-right'>
                        <img src={Winwise} alt="" />
                    </div>

                    <div className='box box-bottom'>
                        <img src={Whisper} alt="" />
                    </div>

                    <div className='box box-bottom'>
                        <img src={Paybox} alt="" />
                    </div>

                    <div className='box'>
                        <img src={Vuzual} alt="" />
                    </div>

                </div>
            </div>
            <div className='border border-line'></div>

        </section>
    )
}

export default Partners