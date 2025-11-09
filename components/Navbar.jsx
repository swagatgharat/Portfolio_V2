import { navbar_assets } from '@/assets/navbar/navbar_assets';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
        z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#home">
                    <Image src={isDarkMode ? navbar_assets.profile_logo_dark : navbar_assets.profile_logo_light} alt='Logo' className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a href="#home" className='font-Ovo'>Home</a></li>
                    <li><a href="#about" className='font-Ovo'>About Me</a></li>
                    <li><a href="#service" className='font-Ovo'>Services</a></li>
                    <li><a href="#work" className='font-Ovo'>My Work</a></li>
                    <li><a href="#contact" className='font-Ovo'>Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? navbar_assets.sun : navbar_assets.moon} alt='' className='w-6' />
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                        Contact
                        <Image src={isDarkMode ? navbar_assets.upward_arrow_dark : navbar_assets.upward_arrow_light} alt='Arrow' className='w-3'></Image>
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? navbar_assets.menu_dark : navbar_assets.menu_light} alt='' className='w-6' />
                    </button>
                </div>

                {/*Mobile Menu*/}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? navbar_assets.close_dark : navbar_assets.close_light} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a href="#home" className='font-Ovo' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About Me</a></li>
                    <li><a href="#service" className='font-Ovo' onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar