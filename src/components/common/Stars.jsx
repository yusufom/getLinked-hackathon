import React from 'react'
import WhiteStar from '../../assets/images/whitestar.png'
import GreyStar from '../../assets/images/greystar.png'
import ColoredStar from '../../assets/images/coloredstar.png'

function WhiteStars({ className }) {
    return (
        <img src={WhiteStar} alt="white twinkle Stars" className={`${className} animate-pulse duration-700 absolute !scale-[0.3]`} />
    )
}

function GreyStars({ className }) {
    return (
        <img src={GreyStar} alt="grey twinkle Stars" className={`${className} animate-pulse duration-700 absolute !scale-[0.3]`} />
    )
}

function ColoredStars({ className }) {
    return (
        <img src={ColoredStar} alt="grey twinkle Stars" className={`${className} animate-pulse duration-700 absolute !scale-[0.4]`} />
    )
}

export { WhiteStars, GreyStars, ColoredStars }