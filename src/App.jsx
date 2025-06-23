import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import instagram from './assets/insta.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'

function App() {

  return (
    <>
    <head className='overflow-hidden'>
      <title>Campus Collab</title>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap" rel="stylesheet"/>
    </head>
    <div className='absolute left-0 top-0 h-screen w-screen bg-black'>
    <div className="absolute top-0 left-0 bg-black min-h-dvh w-screen text-stone-400 overflow-hidden" style={{ fontFamily: 'Syne' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[650px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none overflow-hidden"></div>
    <h2 className="text-4xl font-bold text-center px-4 pt-25">Campus Collab</h2>
    <p className="text-lg mt-4 text-center pt-5">Presents</p>
    <h1 className='pt-5'>InCue</h1>
      <div className='flex flex-col gap-10 justify-center text-center align-center item-center py-10 px-5'>
      <button onClick={() => window.open('https://chat.whatsapp.com/JaoYi2xmacyIqxKuYqVE5F', '_blank', 'noopener,noreferrer')}
       class="max-w-2xl w-[350px] mx-auto relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden focus:outline-none focus:ring-0 active:outline-none">
        <span class="relative text-lg z-20 focus:outline-none focus:ring-0 active:outline-none">Join Our Whatsapp Group</span>
        <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
      </button>
      <button onClick={() => window.open('https://forms.gle/nxErE71jRygmRjke6', '_blank', 'noopener,noreferrer')}
      class="max-w-2xl w-[350px] mx-auto relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden focus:outline-none focus:ring-0 active:outline-none">
        <span class="relative text-lg z-20 focus:outline-none focus:ring-0 active:outline-none">Pre Register Here</span>
        <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
        <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
      </button>

      </div>
        <div className="my-5 py-6 bg-black h-10 w-screen flex items-center overflow-hidden">
        <div className="bg-black flex justify-center items-center min-h-screen w-screen">
          <a href="https://instagram.com/incue.in" target="_blank" rel="noopener noreferrer" className="socialContainer containerOne mr-8">
            <img src={instagram} className="socialSvg instagramSvg" alt="Instagram" />
          </a>

          <a href="https://x.com/campuswaveme" target="_blank" rel="noopener noreferrer" className="socialContainer containerTwo mr-8">
            <img src={twitter} className="socialSvg twitterSvg" alt="Twitter" />
          </a>

          <a href="https://www.linkedin.com/company/incue-in/about/" target="_blank" rel="noopener noreferrer" className="socialContainer containerThree">
            <img src={linkedin} className="socialSvg linkdinSvg" alt="LinkedIn" />
          </a>
        </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default App
