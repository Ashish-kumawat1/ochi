import React from 'react'
import { GoArrowUp } from "react-icons/go";

function landingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white pt-2'>
        <div className='textstructure mt-40 px-20'>
              {["we create","eye-opening ","presentations" ].map((item,index)=>{
                return (
                  <div className='masker '>
                    <div className='w-fit flex items-center'>
                    {index ==1 &&( <div className='w-[9vw] h-[5vw] bg-amber-300 rounded-lg'><img src="./public/images/content-image01.jpg" alt="defalut image" className='rounded-lg '/></div>)}
                <h1 className='font-["Neue_Montreal"] uppercase text-[7vw] leading-[6.5vw] tracking-tight font-semibold '>
                  {item}
                </h1>             
                  </div>
            </div>)})}
            <div className='flex w-14 h-44 bg-red-500 absolute right-0 top-1/2 transform -translate-y-1/2'>
              <div className='w-2 h-2 text-2xl text-white  mx-3 my-2'><b>W.</b></div>
                  <pre className='font-["Neue_Montreal"] absolute top-22 -left-5.5 font-medium -rotate-90'>site of the Day</pre>
            </div>
        </div>

        <div className='border-t-2 border-zinc-700 mt-24 flex justify-between items-center py-5 px-20' >
          {["Presentation and storytelling agency"," For innovation teams and global brands",].map((item,index)=>{
            return<p className='text-md land tracking-tight font-normal font-["Neue_Montreal"]'>{item}</p>
          })}
          <div className='start group flex items-center gap-3 justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md'>
            {/* Button */}
            <button aria-label="Start the project" className='relative z-10 uppercase border-2 font-normal tracking-wide text-sm border-zinc-500 rounded-full px-4 py-2 text-white transition-colors duration-300 ease-in-out group-hover:text-zinc-900'>
              <span className='relative z-20'>Start the project</span>
              <span className='absolute inset-0 bg-white rounded-full transform -translate-x-full transition-transform duration-400 ease-in-out group-hover:translate-x-0'></span>
            </button>

            {/* Arrow circle */}
            <div className='relative w-9 h-9 rounded-full border-2 border-zinc-500 flex items-center justify-center text-lg text-white rotate-45 overflow-hidden transition-colors duration-300 ease-in-out group-hover:text-zinc-900'>
              <span className='absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100'></span>
              <span className='relative z-10 transform rotate-10'><GoArrowUp /></span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default landingPage
