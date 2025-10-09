import React, {useEffect, useState, useRef} from 'react'


function eyes() {

    const [rotate, setRotate] = useState(0);

      useEffect(() => {
            window.addEventListener("mousemove" ,(e)=>{
              let mouseX = e.clientX;
              let mouseY = e.clientY;
              
              let deltaX = mouseX -window.innerWidth/2;
              let deltaY = mouseY -window.innerHeight/2;

              var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
              setRotate(angle-180);

            
            })
        })


  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full flex bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className='absolute flex  gap-5 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] '>
        <div className='w-[15vw] h-[15vw] bg-zinc-50 rounded-full flex items-center justify-center'>
              <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center items-center uppercase'>play
                    <div style={{transform:`rotate(${rotate}deg)`}} className='absolute line w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className='w-[1.5vw] h-[1.5vw] bg-zinc-50 rounded-full '></div>
                    </div>  
              </div>
        </div>
        <div className='w-[15vw] h-[15vw] bg-zinc-50 rounded-full flex items-center justify-center'>
              <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center items-center uppercase '>play
                    <div style={{transform:`rotate(${rotate}deg)`}} className='absolute line w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                        <div className='w-[1.5vw] h-[1.5vw] bg-zinc-50 rounded-full '></div>
                    </div>    
              </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default eyes
