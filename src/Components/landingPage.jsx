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
                    {index ==1 &&( <div className='w-[9vw] h-[5vw] bg-amber-300 rounded-lg'></div>)}
                <h1 className='font-["Neue_Montreal"] uppercase text-[7vw] leading-[6.5vw] tracking-tight font-semibold '>
                  {item}
                </h1>             
                  </div>
            </div>)})}
        </div>

        <div className='border-t-2 border-zinc-700 mt-24 flex justify-between items-center py-5 px-20' >
          {["For public and private companies","From the first pitch to IPO",].map((item,index)=>{
            return<p className='text-md land tracking-tight font-light'>{item}</p>
          })}
          <div className='start flex items-center gap-5'>
              <button className='uppercase border-2 font-light text-sm border-zinc-500 rounded-full px-4 py-2' >Start the project</button>
                <div className='w-10 h-10 rounded-full border-2  border-zinc-500 flex items-center justify-center text-2xl rotate-45'>
                    <GoArrowUp />
                </div>
          </div>
        </div>
      
    </div>
  )
}

export default landingPage
