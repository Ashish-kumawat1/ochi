import { motion } from "motion/react"
import React from 'react'
import About from "./about"
import { div } from 'motion/react-client'
function Marquee() {
  return (
	<div className="bg-[#004d43]">
   		<div className='w-full h-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl  '>
       		 <div className='text border-t-1 border-b-1 border-zinc-300 flex whitespace-nowrap pb-12 pt-2 gap-14 uppercase overflow-hidden'>
       		 	<motion.h1 initial={{ x: 0 }} animate={{  x :"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:10}} className='text-[28.7vw] leading-[15.4vw] font-["Founders_Grotesk_X-Cond_SmBd"]'>we are ochi</motion.h1>
       		 	<motion.h1 initial={{ x: 0 }} animate={{  x :"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:10}} className='text-[28.7vw] leading-[15.4vw] font-["Founders_Grotesk_X-Cond_SmBd"]'>we are ochi</motion.h1>
        	</div>

    	</div>
			<About/>
	</div>	

  )
}

export default Marquee
