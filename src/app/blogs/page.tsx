import Link from 'next/link';
import React from 'react';
import { FaRegistered } from 'react-icons/fa6';
import { Poppins } from 'next/font/google';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Cookie } from 'next/font/google';
const cookie = Cookie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const poppins = Poppins({
  weight:"900",
  display:"swap",
  subsets:["latin"]
});


const page = () => {
  return (
    <div className='md:w-full bg-blue-500  h-full'>
      <div className='bg-transparent backdrop-blur-md md:w-full h-[70px] flex justify-between items-center shadow-lg px-5 fixed overflow-hidden'>
      <div className='flex p-2 '>
            <h1 className='font-bold md:text-6xl text-2xl font-signature'><Link href={"/"}>MN</Link></h1>
           <p className='font-semibold md:text-2xl text-sm font-para bg-gradient-to-b from-[#ff874a]  to-[#ffd9b2] inline-block text-transparent bg-clip-text'>Trusted </p>
            <FaRegistered size={15} className='text-[#ff874a] pt-2 ' />
            </div>
         
            <div>
          <h1 className={`md:text-4xl text-xl text-white  ${poppins.className} `}>Blogs</h1>
        </div>


        <div >
            <Link href='/contact' className='inline-flex items-center md:px-6 px-1 md:py-2 py-2 bg-[#f99b27] rounded-md text-white font-bold text-[12px] md:text-[18px]  hover:bg-[#bb8c53] hover:text-black/70 '>CONTACT US <MdOutlineKeyboardArrowRight size={22}  />
            </Link>
            </div>
         </div>
        
        <div className=' h-full md:w-full  justify-center pt-24  '>
          <h1 className={`text-center pt-9 ${cookie.className} text-[#f99b27] text-6xl  `} >All New Updates Here !</h1>
          <div className=' border-t-2 border-[#f99b27] mt-10 w-[1200px]  grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  justify-items-center pt-16 gap-6  mx-auto  '>
          <div className=' shadow-xl border-2  w-[350px] h-[400px] rounded'></div>
          <div className=' shadow-xl  w-[350px] h-[400px] rounded'>

          </div>
          <div className=' shadow-xl  w-[350px] h-[400px] rounded'></div>
          <div className=' shadow-xl  w-[350px] h-[400px] rounded'></div> 
          <div className=' shadow-xl  w-[350px] h-[400px] rounded'></div>
          <div className=' shadow-xl  w-[350px] h-[400px] rounded'></div>
          </div>
        </div>


        

        
      </div>


        
  
  )
}

export default page
