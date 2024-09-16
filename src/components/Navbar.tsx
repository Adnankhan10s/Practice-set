
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {FaRegistered } from 'react-icons/fa';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import {motion} from 'framer-motion';



const navLinks =[
    {title:"Home", path:"/"},
    {title:"About", path:"/../#about"},
    {title: "Services", path:"/../#services"},
    {title:"Blog Posts" , path:"/blogs"},
    {title : "Contact-Us", path:"/contact"}
]

const Navbar = () => {
   const [nav , setNav]=useState(false);
   const toggleNav =()=>{
    setNav(!nav)
   }
   const closeNav=()=>{
    setNav(false)
   }
   const menuVarients={
    open:{
        x : 0,
    transition:{
        stiffness: 20,
        damping :15,
    }},
    closed:{
        x:'-100%',
        transition:{
            stiffness:20,
            damping:15,
        }
    }
   }
  return (
    <nav>
        <div className='hidden md:flex md:w-full h-[60px]  bg-[#0066cc] text-white p-4 shadow-md  fixed  '>  
        <div className='flex justify-between items-center text-center  w-[100%] '>
        <div className='flex p-2 '>
            <h1 className='font-bold text-6xl font-signature'><Link href={"/"}>MN</Link></h1>
           <p className='font-semibold text-2xl font-para bg-gradient-to-b from-[#ff874a]  to-[#ffd9b2] inline-block text-transparent bg-clip-text'>Trusted </p>
            <FaRegistered size={15} className='text-[#ff874a] pt-2 ' />
            </div>
            <div className=''>
                <ul className='flex gap-4 pr-2 text-[16px] lg:text-xl font-semibold'>
                    {navLinks.map((link , index)=>(
                       <li key={index} className='hover:text-[#ff874a]'>
                        <Link href={link.path}>{link.title}</Link>
                       </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>

        {/* Mobile view */}
<div className='md:hidden w-full h-[100px] bg-[#0066cc] text-white shadow-md  relative'>
         <div className=' text-center block items-center justify-center top-4 '>
            <h1 className='font-semibold text-6xl pt-2 font-signature '>M N</h1>
            <div className='flex items-center justify-center'>
           <p className='font-semibold text-xl pr-2 font-para bg-gradient-to-b from-[#ff874a]  to-[#ffd9b2] inline-block text-transparent bg-clip-text'>Trusted </p>
           <FaRegistered  size={15} />
           </div>
            
            </div>
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded text-white border-white/80 p-2 z-50 ">
                 {nav ? <AiOutlineClose size={25} />: <AiOutlineMenu size={25}/>}
            </div>
            
            <motion.div
            initial = {false}
            animate ={nav ? 'open' : 'closed'}
            variants={menuVarients}
            className='fixed top-0 left-0 w-full z-40 bg-white/30  backdrop-blur-xl '

            >
                <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded text-white border-white/80 p-2 z-50 ">
                  <AiOutlineClose size={25} />
            </div>
                
                <ul className='text-4xl  font-para my-24 text-center space-y-8 '>
                {
                    navLinks.map((link , index)=>(
                       <li key={index} className='font-head font-bold text-[#ff874a] hover:text-[#1a1918]'>
                          <Link onClick={closeNav} href={link.path}>{link.title}</Link>
                       </li>
                    ))
                }
                </ul>

            </motion.div>

            </div>

        
    </nav>
  )
}

export default Navbar