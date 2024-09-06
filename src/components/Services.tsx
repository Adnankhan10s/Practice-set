"use client"
import React from 'react';
import {motion} from 'framer-motion';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


const listLinks=[
    {title:"Real Estate Reports Creation" , path:"/"},
    {title:"Real Estate Social Media Marketing", path:"/"},
    {title:"Data Entry, Data Mining, & Data Scraping" ,path :"/"},
    {title:"Graphic Designing for Real estate Promos",path:"/"},
    {title: "Graphic Designer Specialist ",path:"/"},
    {title:"Spreadsheet & Documentation work", path:"/"},
    {title:"Email Handling & Campaign Management",path:"/"},
    {title:"General Administrative Support", path:"/"},
    {title:"Search Engine Optimization", path:"/"}

]

const bebasneue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

const Services = () => {
  return (
   <div className='md:w-full bg-[#e9d9bd] flex justify-center md:h-[600px] h-[800px] ' id='services'>
    <motion.div
    initial={{opacity:0 , scale:0 }}
    whileInView={{opacity:1 , scale: 1}}
    transition={{duration:0.6}}
    viewport={{once:true}}

    className='md:w-[850px] px-3  text-center pt-6 md:h-[500px] mt-4 overflow-clip '
    >
      <div className='text-2xl md:text-4xl font-bold'>
        <h1 className={bebasneue.className}>WHAT VIRTUAL ASSISSTANT SERVICES</h1>
        <h1 className={bebasneue.className}>DO WE PROVIDE & SUPPORT ?</h1>
        </div>
       <h1 className=' md:text-xl font-bold'>Real Estate Virtual Assistant Services We Offer</h1>
       <p className='text-start pt-2'>MN Trusted is a real estate virtual assistant service providing company that ensures streamlined management of your daily tasks.<span className='text-[#f99b27] font-cont font-bold cursor-pointer'> MN trusted </span> real estate virtual assistant services are the Holy Grail to enhance your productivity without working yourself out. The real estate virtual assistant services we offer include :</p>
 
 <div className='grid md:grid-cols-2   md:gap-x-16 gap-y-2 mt-10  '>
          {listLinks.map((link,index)=>(
           
       <Link href={link.path} className=' md:text-[14px] text-[12px]  px-2 py-2 border hover:bg-[#f99b27] hover:border-white hover:text-white border-[#f99b27]  text-[#f99b27] text-start md:items-end gap-4 inline-flex font-bold   'key={index}>
         
             {link.title} <MdOutlineKeyboardArrowRight size={20}  /> 
             </Link>
             
       ))   }
       </div>
    
       



    </motion.div>
    



   </div>
  )
}

export default Services
