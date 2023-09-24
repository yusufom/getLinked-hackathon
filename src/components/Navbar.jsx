import React from 'react'
import { Link } from 'react-scroll'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const navLinks = [
    { name: "Timeline", href: "/#Timeline", routeLink: false },
    { name: "Overview", href: "/#Overview", routeLink: false },
    { name: "FAQs", href: "/#faqs", routeLink: false },
    { name: "Contact", href: "/contact", routeLink: true },
]

function Navbar({ landing }) {
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(set => !set)
    }
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
        <motion.nav className={`max-w-[1512px] mx-auto`} initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2 }}
            viewport={{ once: true }}>
            <div className='flex justify-between items-center lg:pt-[63px] pt-[30px] lg:pb-[25px] pb-[23px] lg:px-[128px] px-[48px] overflow-hidden'>
                <NavLink to={`/`} className={`z-[70]`}>
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

                <div className='block lg:hidden z-[99]'>
                    <button className={`rounded-lg flex flex-col justify-between items-baseline p-0 cursor-pointer w-[20px]  relative after:absolute after:inset-0 after:m-auto after:h-1  after:rounded-lg ${open ? 'after:h-5 after:bg-transparent after:border px-1 after:rounded-full h-5' : 'after:w-full after:bg-white h-4'} transition-all ease-in-out after:transition-all after:ease-in-out`} onClick={handleClickOpen}>
                        <span className={`rounded-lg flex justify-start  bg-white h-1 ${open ? 'w-full rotate-45 translate-y-2' : 'w-[50%]'} transition-all ease-in-out`}></span>
                        <span className={`rounded-lg absolute bottom-0 right-0 justify-end h-1 bg-white ${open ? 'w-full -rotate-45 -translate-y-2 relative' : 'w-1/2'} transition-all ease-in-out`}></span>
                    </button>


                </div>
            </div>

            <div className={`z-[99] px-[33px] w-full overflow-hidden block bg-[#150E28] ${open ? 'h-screen' : 'h-0'} transition-all`}>
                <ul className='flex flex-col gap-y-5 pt-[100px]'>
                    {landing ?

                        navLinks.map((res, index) => (
                            res.routeLink ?
                                <NavLink onClick={handleClickOpen} to={res.href} smooth={true} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "font-base font-normal leading-normal cursor-pointer bg-btnlinear text-transparent" : "font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all"}>
                                    <li>{res.name}</li>
                                </NavLink>
                                :
                                <Link onClick={handleClickOpen} to={res.href} smooth={true} duration={1000} delay={200} spy={true} ><li className='font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all'>{res.name}</li></Link>

                        ))
                        :
                        navLinks.map((res, index) => (
                            <NavLink onClick={handleClickOpen} to={res.href} smooth={true} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-btnlinear text-transparent bg-clip-text font-base font-normal leading-normal cursor-pointer" : "font-base font-normal leading-normal cursor-pointer bg-clip-text hover:bg-btnlinear hover:text-transparent transition-all"}>
                                <li>{res.name}</li>
                            </NavLink>
                        ))


                    }
                    <div className='mt-[9px]'>
                        <NavLink onClick={handleClickOpen} to={`/register`} className='text-base leading-normal py-4 px-[52px] bg-primaryLinear rounded hover:-translate-y-1 transition-all hover:scale-105'>
                            <button >Register</button>
                        </NavLink>
                    </div>
                </ul>


            </div>
        </motion.nav>
    )
}

export default Navbar