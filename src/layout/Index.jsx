import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/landing/Footer'

function Layout() {
    return (
        <>
            <header>
                
                <Navbar landing={true}/>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default Layout