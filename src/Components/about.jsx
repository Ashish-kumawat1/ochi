import React from 'react'
import { GoArrowUp } from "react-icons/go";
import { div } from 'motion/react-client';

export default function about() {
  return (
    <div className='w-full py-10 text-[#333333] p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '> 
        <h1 className='font-[Neue Montreal] text-[52px]  leading-none tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
        <br />
        <hr className='font-[Neue_Montreal] -ml-20 -mr-20 mt-16' />
        <div className='w-full flex gap-5 mt-16'>
        <div className='w-1/2'> 
        <p className='text-[4vw] tracking-tighter leading-[8vh]'>How we can help:</p>
      <button className='inline-flex bg-zinc-900 rounded-full p-3 gap-5 mt-10 cursor-pointer items-center w-fit '>
         <p className='uppercase text-amber-50 ml-4'>read more</p>
         <div className='w-3 h-3 bg-amber-50 rounded-full mx-1'></div>
         {/* <div className='w-10 h-10 rounded-full bg-amber-50  border-zinc-500 flex items-center justify-center text-2xl rotate-45'> <GoArrowUp /> </div> */}
      </button>
      
        </div>
      <div className='w-1/2  bg-[#5c5c5c99] mt-10 rounded-3xl'>
      <img src="./public/images/Homepage-Photo-1326x939.jpg" alt="defalut image" className='rounded-2xl' /></div>
      </div>
    </div>
  )
}
