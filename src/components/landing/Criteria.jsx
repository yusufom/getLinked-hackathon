import React from 'react'
import criterialImg from '../../assets/images/criteria.png'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars'

function Criteria() {
    return (
        <section className='relative'>
            <ColoredStars className={`left-[23.5%] top-[2%] scale-75`} />
            <GreyStars className={`left-[35%] top-[40%] scale-50`} />
            <WhiteStars className={`left-[45%] bottom-[18%] scale-75`} />

            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[33px] mt-[92px] lg:mb-[171px] mb-[60px]'>
                <div className='flex lg:flex-row flex-col gap-x-[53px] items-center'>
                    <div className='lg:max-w-[710px] lg:max-h-[587px] w-full relative'>
                        <div className='absolute w-[134px] h-[134px] rounded-full bg-ballLinear -top-[54px] left-[68px] animate-pulse hidden lg:block'></div>
                        <img src={criterialImg} alt="" className='z-50 relative w-full' />
                    </div>
                    <div className='w-full'>
                        <div className='lg:max-w-[267px] max-w-[167px] mx-auto lg:mx-0'>
                            
                            <h2 className='text-center lg:text-left font-Clash lg:text-[32px] text-xl font-bold'>Judging Criteria <span className='text-primary'>Key attributes</span></h2>
                        </div>

                        <div className='space-y-[22px] mt-[21px] px-[14px] lg:px-0 text-center lg:text-left'>
                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Functionality: </span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Impact and Relevance: </span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Technical Complexity: </span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>

                            <p className='font-sm leading-[27.7px]'><span className='font-base text-primary font-bold'>Adherence to Hackathon RUles: </span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                        </div>

                        <div className='lg:mt-[55px] mt-[22px] text-center lg:text-left'>
                            <button className='lg:text-base text-xs leading-normal lg:py-4 py-[11px] lg:px-[52px] px-[14px] bg-primaryLinear rounded text-center lg:text-left'>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='border border-line'></div>

        </section>
    )
}

export default Criteria
