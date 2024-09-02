import React from 'react';
import Image from 'next/image';
import Telephone from '@/../public/pngwing.com.png'




const Hero = () => {
    return (
        <div className='md:w-full md:h-[700px] h-[800px]  items-center md:pt-28 bg-[#0066cc] ' id='home'>
            <div className=' text-center w-full  '>
                
                <p className='text-sm md:text-lg font-serif text-white/70 p-2 inline-flex items-center'>
                Providing Real Estate Virtual Assistant Services since 2009 in  United States and other parts of the world.
                </p>
               
                
                <div className='md:w-full text-white font-bold text-center text-xl md:text-4xl'>
                   <h1 className='p-4 font-head'>ARE YOU A BUSY ENTREPRENEUR IMPACTED BY<br/>
                    INFLATION & HIGH OPERATIONAL COSTS?</h1>
                </div>
            </div>
           

<div className=' md:w-full  md:h-[400px]  md:flex justify-center items-center  gap-2'>
    <div className='md:min-w-[500px]  max-w-[350px] md:px-6 md:min-h-[300px] mx-auto rounded  overflow-hidden  '>
        <video className='md:min-w-[500px] w-[350px] rounded '  src='/virtual.mp4' width={600} height={300} autoPlay loop  preload='autoPlay' muted/>
    </div>
    <div className='md:w-[400px] h-[400px]  text-center pt-4 md:pt-0 justify-center md:content-center space-y-8 '>
       <div className='w-[100px] mx-auto md:pt-4'>
        <Image className='md:w-[80px] w-[80px]' src={Telephone} alt='telephone' width={100} height={100}/>
        </div> 
        <h1 className='md:text-2xl text-xl font-cont font-extrabold text-white/80'>Contact Via :</h1>
        <button className='bg-red-600 px-8 py-2 hover:bg-red-400 border-red-500 rounded-lg'>
        <a href='tel:+92 341258068' className='md:text-xl text-xl font-bold  text-white'>+92 3412458068</a>
        </button>
        

    </div>


</div>





        </div>
    )

}

export default Hero