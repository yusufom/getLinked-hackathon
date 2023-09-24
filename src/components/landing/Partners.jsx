import React from 'react'
import Liberty from '../../assets/images/partners/liberty.png'
import LibertyPay from '../../assets/images/partners/liberty_pay.png'
import Winwise from '../../assets/images/partners/winwise.png'
import Whisper from '../../assets/images/partners/wisper.png'
import Paybox from '../../assets/images/partners/paybox.png'
import Vuzual from '../../assets/images/partners/vuzual.png'
import { ColoredStars, WhiteStars } from '../common/Stars'
import { motion } from 'framer-motion'


function Partners() {


    return (
        <section className='relative'>
            <ColoredStars className={`left-[22.5%] top-[11%] scale-75`} />
            <ColoredStars className={`right-[45.5%] top-[24%] scale-50`} />
            <WhiteStars className={`right-[45.5%] bottom-[44%]`} />

            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px]  rounded-full -bottom-[10%] absolute z-[1]" ></div>
            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[500px] md:h-[300px] left-[0%] blur-[80px] md:blur-[150px]  rounded-full top-[3%] absolute z-[1]" ></div>
            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[33px] lg:mt-[114px] mt-[41px] lg:pb-[150px] gap-x-10'>
                <motion.div className='text-center' initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}>
                    <h2 className='font-Clash lg:text-[32px] text-xl font-bold leading-[27px]'>Partners and Sponsors</h2>
                    <p className='mt-[22px] lg:text-sm text-xs lg:leading-[27px] leading-5 max-w-[452px] mx-auto'>Getlinked Hackathon 1.0 is honored to have the following major
                        companies as its partners and sponsors</p>

                </motion.div>

                <motion.div className='mt-[65px] lg:py-[143px] py-[30px] lg:px-[176px] px-[47px] grid grid-cols-3 lg:mb-[272px] mb-[104px] border border-primary rounded-sm'
                >

                    <motion.div className='box box-top p-4' initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={Liberty} alt="" />
                    </motion.div>

                    <motion.div className='box box-top p-4' initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={LibertyPay} alt="" />
                    </motion.div>

                    <motion.div className='box box-top-right p-4' initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={Winwise} alt="" />
                    </motion.div>

                    <motion.div className='box box-bottom p-4' initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={Whisper} alt="" />
                    </motion.div>

                    <motion.div className='box box-bottom p-4' initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={Paybox} alt="" />
                    </motion.div>

                    <motion.div className='box p-4' initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <img src={Vuzual} alt="" />
                    </motion.div>

                </motion.div>
            </div>
            <div className='border border-line'></div>

        </section>
    )
}

export default Partners