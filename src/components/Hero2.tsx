"use client"
import React from 'react';
import { Cookie, Bebas_Neue } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Circle from '@/../public/va-circle.jpg';
import { SiTicktick } from "react-icons/si";
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const bebasneue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const cookie = Cookie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const Hero2 = () => {
  return (
    <div className='md:min-w-full md:h-[600px] px-4 md:px-0  h-full bg-white text-black text-4xl pt-10 '>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-[#f99b27] '
      >
        <span> <h1 className={cookie.className}>Is hiring a Real Estate VA for you?</h1></span>

      </motion.div>

      <div className='text-black text-center'>
        <span className={bebasneue.className}>Do you need a virtual assistant?</span>
        <p className='text-sm'>Here is a quick way to assess if hiring a Real Estate virtual assistant(VA) is a great move for you and your business.</p>
        <p className='text-sm'>It's an astounding YES if you feel the same way about any of the statements described below.</p>
      </div>


      <div className='md:flex  justify-center items-center pt-10 gap-8'>
        <Image
          src={Circle}
          alt='circle'
          width={250}
          height={250}
          className='rounded-full border-blue-600 border-[20px] mx-auto md:mx-0'
        />
        <div className='flex justify-center items-center md:flex-none'  >
          <ul className='md:text-sm text-[12px] md:pt-2 '>
            <li ><span><SiTicktick size={20} className='text-blue-600 inline-flex  ' /></span> You are overwhelmed with the heavy workload.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex' /></span> You feel tired of doing repetitive admin tasks.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex' /></span> You want to focus more on growing your business.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex' /></span> You want to keep doing the tasks that you love and delegate the rest.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex' /></span> You need help but cannot afford the cost of hiring an in-office employee.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex' /></span> You only want to pay for the work you need when you need it.</li>
            <li><span><SiTicktick size={20} className='text-blue-600 inline-flex ' /></span> You don’t have the time to hire, recruit and train a new assistant.</li>
            <p className='pt-4'>Welcome to <span className='text-[#f99b27] font-cont font-bold cursor-pointer'>MN Trusted</span>, you've come to the right place.
            </p>
            <p>We specialize in providing Virtual Assistant Tailored for the Real Estate Industry </p>
            <p>Help is here; we are making your entrepreneurial journey more manageable.</p>
            
            
            <Link href='/contact' className='md:mt-2  inline-flex items-center md:px-8 px-4 md:py-4 py-2 bg-[#f99b27] rounded-md text-white font-bold hover:bg-[#bb8c53] hover:text-black/70 '>FEEL FREE TO CONTACT US <MdOutlineKeyboardArrowRight size={22}  />
            </Link>
           
          </ul>

        </div><br />

      </div>




    </div>
  )

}

export default Hero2