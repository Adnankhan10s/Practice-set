import React from 'react';
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";


const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
    display: 'swap'
})
const navLinks =[
    {title:"Home", path:"#home"},
    {title:"About", path:"#about"},
    {title: "Services", path:"#services"},
    {title:"Blog Posts" , path:"/blogs"},
    {title : "Contact-Us", path:"/contact"}
]




const Footer = () => {
  return (
    <div className='md:w-full bg-[#0066cc]'>
    <div className='md:w-full md:h-[350px] h-[250px] md:flex justify-center items-center md:gap-4  '>
       

        
    <div className='md:w-[250px] max-w-[250px] h-[150px] md:ml-7 flex space-x-4 md:space-x-0 md:block '>
         <h1 className='md:font-bold text-white md:mb-4 mt-4 md:mt-0'>CONTACT US :</h1>
         <div className='leading-10 mt-4 md:mt-0'>
        <span className={roboto.className}><a href='tel:+92 341258068' className=' md:font-bold  text-white hover:underline'>+92 3412458068</a><br /></span>
         <span className={roboto.className}><a href='' className=' md:font-bold  text-white hover:underline'>adnankhan34r@gmail.com</a></span>
         </div>


    </div>
    <hr/>
    <div className='md:w-[250px] max-w-[150px] h-[150px]'>
          <h1 className='font-bold text-white mb-4'>INFO :</h1>
          <div className='leading-8'>
            {navLinks.map((link , index)=>(
                        <span className={roboto.className} key={index}><Link href={link.path} className=' font-bold  text-white hover:underline'>{link.title}</Link><br/></span>

            ))}
          </div>
    </div>
    <hr/>
    <div className='w-[200px]  h-[150px]'>
    <h1 className='font-bold text-white mb-4 text-center '>FOLLOW US :</h1>

    <div className='flex justify-center space-x-8 mt-8'>
        <FaFacebook size={40} className='cursor-pointer '  />
        <AiFillInstagram size={42} className='cursor-pointer' />
        <AiFillTwitterCircle size={42} className='cursor-pointer'/>

    </div>
    </div>  
    </div>
    <hr/> 
    <p className='py-4 text-white text-center'>Copyright ©2024 Virtual Assistant Talent LLC. All Rights Reserved. | Privacy Policy</p>
    </div>

  )
}

export default Footer
