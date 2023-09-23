import React from 'react'
import FAWImg from '../../assets/images/cwok.png'
import Accordion from '../common/Accordion'
import { GreyStars, WhiteStars, ColoredStars } from '../common/Stars'
import { motion } from 'framer-motion'



function Faqs() {

    const [openPanel, setOpenPanel] = React.useState(null);


    return (
        <section name={`/#faqs`} id='faqs' className='relative '>
            <ColoredStars className={`left-[15.5%] top-[9%] scale-75`} />

            <div className="bg-purpleHero flex w-[100px] h-[100px] md:w-[300px] md:h-[300px] right-[0%] blur-[80px] md:blur-[150px]  rounded-full -top-[40%] absolute z-[-2]" ></div>
            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[33px] mt-[43px] mb-[63px]'>

                <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-[66px]'>
                    <motion.div className='lg:max-w-[427px]' initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <div className='w-full text-center lg:text-left'>
                            <h2 className='lg:max-w-[253px] max-w-[158px] mx-auto lg:mx-0 font-Clash lg:text-[32px] text-xl font-bold'>Frequently Ask <span className='text-primary'>Question</span></h2>
                            <p className='max-w-[342px] text-xs lg:text-sm leading-[27.5px] mt-4'>We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0</p>
                        </div>

                        <div className='mt-[70px] lg:w-[427px] space-y-[25px]'>
                            <Accordion title={`Can i work on a project I started before the hackathon?`} panel={`panel0`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>

                            <Accordion title={`What happens if I need help during the hackathon?`} panel={`panel1`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>

                            <Accordion title={`What happens if I don't have an idea for a project?`} panel={`panel2`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>

                            <Accordion title={`Can I join a team or do I have to come with one?`} panel={`panel3`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>

                            <Accordion title={`What happens after the hackathon ends?`} panel={`panel4`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>

                            <Accordion title={`Can I work on a project I started before the hackathon?`} panel={`panel5`}
                                openPanel={openPanel}
                                setOpenPanel={setOpenPanel}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe. Ipsam voluptatem ullam placeat reprehenderit porro ex pariatur eligendi, iusto obcaecati nisi dolorum natus, nam tempore veritatis, esse ipsa dolores.
                            </Accordion>
                        </div>

                    </motion.div>
                    <motion.div className='max-w-[741px] max-h-[789px] relative' initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2 }}
                        viewport={{ once: true }}>
                        <ColoredStars className={`right-[47.5%] top-[5%] scale-50`} />
                        <ColoredStars className={`left-[20.5%] top-[25%] scale-50`} />
                        <GreyStars className={`left-[7%] top-[55%]`} />
                        <WhiteStars className={`right-[22%] -bottom-[4%]`} />

                        <img src={FAWImg} alt="" className='w-full h-full' />
                    </motion.div>

                </div>

            </div>

            <div className='border border-line'></div>


        </section>
    )
}

export default Faqs
