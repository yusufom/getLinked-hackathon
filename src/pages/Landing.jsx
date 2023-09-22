import React from 'react'
import Hero from '../components/landing/Hero'
import Introduction from '../components/landing/Introduction'
import Rules from '../components/landing/Rules'
import Criteria from '../components/landing/Criteria'
import Faqs from '../components/landing/Faqs'
import Timeline from '../components/landing/Timeline'
import Prize from '../components/landing/Prize'
import Partners from '../components/landing/Partners'
import Privacy from '../components/landing/Privacy'


function Landing() {
    return (
        <>
            <Hero />
            <section className='relative overflow-x-hidden'>
                <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[400px] md:h-[400px] left-[24%] blur-[80px] md:blur-[200px]  rounded-full top-[24%] absolute z-[-2]" ></div>
                <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] -right-[10%] blur-[80px] md:blur-[150px]  rounded-full top-[40%] absolute z-[-2]" ></div>
                
                <div class="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] left-[20%] blur-[80px] md:blur-[150px]  rounded-full top-[80%] absolute z-[-2]" ></div>
                <Introduction />
                <Rules />
                <Criteria />
            </section>
            <Faqs />
            <Timeline />
            <Prize />
            <Partners />
            <Privacy />






        </>
    )
}

export default Landing