import React from 'react'
import './app.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/landingPage'
import Marquee from './Components/Marquee'
import About from './Components/about'
import Eyes from './Components/eyes'
import Featured from './Components/Featured'

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white [&::-webkit-scrollbar]:hidden ">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App
