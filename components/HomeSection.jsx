import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { home_assets } from '@/assets/home/home_assets'

const HomeSection = () => {
    return (
        <div id="home" className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'string', stiffness: 100 }}
            >
                <Image src={home_assets.profile} alt='' className='rounded-full w-32' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm John Doe
                <Image src={home_assets.hand} alt='' className='w-6' />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[44px] font-Ovo'>
                Freelance Developer & Digital Marketer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo text-center'>
                I work with startups and businesses to design and develop impactful websites, applications, and marketing tools that drive digital success.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                    Contact Me
                    <Image src={home_assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Sample_Resume.pdf"
                    download
                    className='px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                    My Resume
                    <Image src={home_assets.download} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default HomeSection