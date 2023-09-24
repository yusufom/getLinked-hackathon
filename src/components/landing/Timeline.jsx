import React from 'react'
import { ColoredStars, GreyStars, WhiteStars } from '../common/Stars';
import { motion } from 'framer-motion';


const TimelineItem = ({ date, title, number, isEven, description }) => {
    return (
        <>
            <div className={`lg:flex hidden ${isEven ? 'flex-row-reverse' : 'flex-row'} mt-6 mb-6 justify-center gap-x-[90px] items-center`}>
                <motion.div className='w-full' initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}>
                    <h3 className={`text-2xl  text-primary font-bold leading-normal ${isEven ? 'text-left' : 'text-right'}`}>{title}</h3>
                    <p className={`${isEven ? 'text-left mr-auto' : 'text-right ml-auto'} max-w-[436px]   text-base leading-[23.926px] mt-3`}>{description}</p>
                </motion.div>
                <motion.div className='relative' initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}>
                    <div className="absolute border-primary h-20 border -top-24 left-1/2 -z-40"></div>
                    <div className="w-[53px] h-[53px] mx-auto rounded-full bg-timelineLinear text-white font-bold flex items-center justify-center text-2xl leading-normal">
                        {number}
                    </div>
                </motion.div>
                <motion.div className=' w-full' initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}>
                    <p className={`text-2xl  text-primary font-bold leading-normal ${isEven ? 'text-right' : 'text-left'}`}>{date}</p>
                </motion.div>

            </div>
            <motion.div className={`flex lg:hidden mt-6 mb-6 justify-center gap-x-[10px] items-end`} initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}>
                <div className='relative'>
                    <div className="absolute border-primary h-[84px] border -top-24 left-1/2 -z-40"></div>
                    <div className="w-[20px] h-[20px] mx-auto rounded-full bg-timelineLinear text-white font-bold flex items-center justify-center text-xs leading-normal">
                        {number}
                    </div>
                </div>
                <div className='w-full -mt-2'>
                    <h3 className={`text-xs  text-primary font-bold leading-normal`}>{title}</h3>
                    <p className={`text-xs leading-[23.926px]`}>{description}</p>
                    <p className={`text-xs  text-primary font-bold leading-normal`}>{date}</p>
                </div>


            </motion.div>
        </>
    );
};


function Timeline() {
    const timelineData = [
        {
            date: 'November 18, 2023',
            title: 'Hackathon Announcement',
            description: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
            number: 1,
        },
        {
            date: 'November 18, 2023',
            title: 'Team Registration begins',
            description: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
            number: 2,
        },
        {
            date: 'November 18, 2023',
            title: 'Team Registration ends',
            description: 'Interested Participants are no longer Allowed to register',
            number: 3,
        },
        {
            date: 'November 18, 2023',
            title: 'Announcement of the accepted teams and ideas',
            description: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
            number: 4,
        },
        {
            date: 'November 18, 2023',
            title: 'Getlinked Hackathon 1.0 Offically Begins',
            description: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
            number: 5,
        },
        {
            date: 'November 18, 2023',
            title: 'Demo Day',
            description: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
            number: 6,
        },
    ];
    return (
        <section name='/#Timeline' id='Timeline' className='relative'>
            <ColoredStars className={`left-[27.5%] top-[15%] scale-75`} />
            <WhiteStars className={`right-[25.5%] top-[50%] scale-75`} />
            <GreyStars className={`left-[20%] bottom-[3%] scale-75`} />
            <div className='max-w-[1512px] mx-auto lg:px-[128px] px-[33px] mt-[72px] mb-[110px]'>
                <div className='text-center'>
                    <h2 className='font-Clash lg:text-[32px] text-xl font-bold'>Timeline</h2>
                    <p className='text-sm lg:max-w-[346px]  lg:mx-auto mt-3 w-full'>Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                </div>

                <div className='mt-[170px] container mx-auto space-y-[47px] relative'>


                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            date={item.date}
                            description={item.description}
                            title={item.title}
                            number={item.number}
                            isEven={index % 2 !== 0}
                        />
                    ))}



                </div>
            </div>
        </section>
    )
}

export default Timeline