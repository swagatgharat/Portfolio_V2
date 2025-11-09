import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { service_assets, service_data } from '@/assets/service/service_assets'

const ServiceSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='service'
            className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                What I Offer
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                My Services
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12'>
                I work with startups and businesses to design and develop impactful websites, applications, and marketing tools that drive digital success.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 my-10'>
                {
                    service_data.map(({ icon, title, description, description1, description2, link }, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            key={index}
                            className='border border-gray-400 rounded-lg px-8 py-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                            <Image src={icon} alt='' className='w-10' />
                            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description1}</p>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description2}</p>
                        </motion.div>
                    ))
                }
            </motion.div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Sample_Resume.pdf"
                    download
                    className='px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                    Services Brochure
                    <Image src={service_assets.download} alt='' className='w-4' />
                </motion.a>
            </div>
        </motion.div>
    )
}

export default ServiceSection