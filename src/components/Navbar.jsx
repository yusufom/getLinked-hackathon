import React from 'react'
import { Link } from 'react-scroll'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'


const navLinks = [
    { name: "Timeline", href: "/#Timeline", routeLink: false },
    { name: "Overview", href: "/#Overview", routeLink: false },
    { name: "FAQs", href: "/#faqs", routeLink: false },
    { name: "Contact", href: "/contact", routeLink: true },
]

function Navbar({ landing }) {
    const location = useLocation()
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
                // setTimeout(() => {
                //     navigate(location.pathname, { replace: true });
                // }, 1000); 
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location, navigate])
    return (
        <nav className='max-w-[1512px] mx-auto lg:px-[128px] px-[48px]'>
            <div className='flex justify-between items-center lg:pt-[63px] pt-[30px] lg:pb-[25px] pb-[23px]'>
                <NavLink to={`/`}>
                    <p className='font-Clash lg:text-4xl text-base font-bold leading-normal'>get<span className='text-primary'>linked</span></p>
                </NavLink>
                <div className='lg:flex gap-x-[121px] items-center hidden'>
                    <ul className='flex gap-x-14 items-center'>
                        {landing ?

                            navLinks.map((res, index) => (
                                res.routeLink ?
                                    <NavLink to={res.href} smooth={true} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "font-base font-normal leading-normal cursor-pointer bg-btnlinear text-transparent" : "font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all"}>
                                        <li>{res.name}</li>
                                    </NavLink>
                                    :
                                    <Link to={res.href} smooth={true} duration={1000} delay={200} spy={true} ><li className='font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all'>{res.name}</li></Link>

                            ))
                            :
                            navLinks.map((res, index) => (
                                <NavLink to={res.href} smooth={true} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-btnlinear text-transparent bg-clip-text font-base font-normal leading-normal cursor-pointer" : "font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all"}>
                                    <li>{res.name}</li>
                                </NavLink>
                            ))


                        }
                    </ul>

                    <NavLink to={`/register`} className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded hover:-translate-y-1 transition-all hover:scale-105'>
                        <button >Register</button>
                    </NavLink>

                </div>

                <div className='w-10 h-10 bg-white'></div>
            </div>
        </nav>
    )
}

export default Navbar