import React from 'react'

function Featured() {
  return (
    <div className=' w-full py-16 flex flex-col items-center gap-10'>
      <div className='w-full'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tighter leading-[8vh]'>Featured projects</h1>
      </div>
      <hr className='mt-10' />
  <div className='cards w-full flex flex-wrap gap-10 p-10'>
          <div className='card w-full md:basis-[48%] h-[80vh]'>
              <div className='flex items-center gap-4 mb-6'>
                    <div className='w-2 h-2 bg-amber-50 rounded-full'></div>
                    <p className='text-lg  text-white'>Salience Labs</p>
              </div>
          		    <div className='h-[70vh] bg-[#cddbd2] p-10 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-700 ease-in-out'></div>
                  <div className='flex items-center gap-4 mb-6'>  
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>View Project </button>
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>Project details </button>
                  </div>
          </div>
          <div className='card w-full md:basis-[48%] h-[80vh]'>
              <div className='flex items-center gap-4 mb-6'>
                    <div className='w-2 h-2 bg-amber-50 rounded-full'></div>
                    <p className='text-lg  text-white'>Salience Labs</p>
              </div>
          		    <div className='h-[70vh] bg-[#cddbd2] p-10 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-700 ease-in-out'></div>
                  <div className='flex items-center gap-4 mb-6'>  
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>View Project </button>
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>Project details </button>
                  </div>
          </div>         
          <div className='card w-full md:basis-[48%] h-[80vh]'>
              <div className='flex items-center gap-4 mb-6'>
                    <div className='w-2 h-2 bg-amber-50 rounded-full'></div>
                    <p className='text-lg  text-white'>Salience Labs</p>
              </div>
          		    <div className='h-[70vh] bg-[#cddbd2] p-10 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-700 ease-in-out'></div>
                  <div className='flex items-center gap-4 mb-6'>  
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>View Project </button>
                      <button className='mt-4 bg-zinc-900 text-white text-sm font-[Neue_Montreal] py-2 px-4 border-1 border-amber-50 rounded-full cursor-pointer hover:bg-amber-50 hover:text-zinc-900  transition-transform duration-700 ease-in-out'>Project details </button>
                  </div>
          </div>         

    </div>
    <button className='inline-flex bg-zinc-50 rounded-full p-3 gap-5 mt-10 cursor-pointer items-center w-fit'>
         <p className='uppercase text-zinc-900 ml-4'>view all case studies</p>
         <div className='w-3 h-3 bg-zinc-900 rounded-full mx-1'></div>
         {/* <div className='w-10 h-10 rounded-full bg-amber-50  border-zinc-500 flex items-center justify-center text-2xl rotate-45'> <GoArrowUp /> </div> */}
      </button>
      
    </div>
  )
}

export default Featured

