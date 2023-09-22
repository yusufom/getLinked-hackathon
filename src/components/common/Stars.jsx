import React from 'react'
import WhiteStar from '../../assets/images/whitestar.png'
import GreyStar from '../../assets/images/greystar.png'
import ColoredStar from '../../assets/images/coloredstar.png'

function WhiteStars({ className }) {
    return (
        <img src={WhiteStar} alt="white twinkle Stars" className={`${className} animate-pulse duration-700 absolute`} />
    )
}

function GreyStars({ className }) {
    return (
        <img src={GreyStar} alt="grey twinkle Stars" className={`${className} animate-pulse duration-700 absolute`} />
    )
}

function ColoredStars({ className }) {
    return (
        <img src={ColoredStar} alt="grey twinkle Stars" className={`${className} animate-pulse duration-700 absolute`} />
    )
}

export { WhiteStars, GreyStars, ColoredStars }