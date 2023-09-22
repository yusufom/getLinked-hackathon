import React from 'react'
import criterialImg from '../../assets/images/criteria.png'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars'

function Criteria() {
    return (
        <section className='relative'>
            <ColoredStars className={`left-[23.5%] top-[2%] scale-75`} />
            <GreyStars className={`left-[35%] top-[40%] scale-50`} />
            <WhiteStars className={`left-[45%] bottom-[18%] scale-75`} />

            <div className='max-w-[1512px] mx-auto px-[128px] mt-[92px] mb-[171px]'>
                <div className='flex gap-x-[53px] items-center'>
                    <div className='max-w-[710px] max-h-[587px] w-full relative'>
                        <div className='absolute w-[134px] h-[134px] rounded-full bg-ballLinear -top-[54px] left-[68px] animate-pulse'></div>
                        <img src={criterialImg} alt="" className='z-50 relative' />
                    </div>
                    <div className='w-full'>
                        <h2 className='max-w-[267px] font-Clash text-[32px] font-bold'>Judging Criteria <span className='text-primary'>Key attributes</span></h2>

                        <div className='space-y-[22px] mt-[21px]'>
                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Functionality: </span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Technical Complexity: </span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Adherence to Hackathon RUles: </span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                        </div>

                        <div className='mt-[55px]'>
                            <button className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded'>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='border border-line'></div>

        </section>
    )
}

export default Criteria
