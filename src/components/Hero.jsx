import { ArrowDown } from "lucide-react";
import Countdown from "./Countdown"; // Assuming Countdown is your component
import { easeInOut, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer";
import GlitchText from "./micro/Glitch";

const MarqueeText = [
  "Welcome to Incue! We're glad to have you",
  "We're launching on 2nd September 2025!",
  "Tired of Missing your favourite events? No More!",
  "Say Hi to Incue, Say Hi to Future"
]

export default function HeroSection() {
  return (
    <>

      <div id="about" className="w-full h-full flex flex-col justify-between 
      items-center z-49">
        
        {/* Top Spacer or Logo area if needed */}
        <div className="">


        </div>

        {/* Center Title & Description */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2, delay:1}}
        className="flex flex-col space-y-4 text-center items-center sm:w-[60vw]">
          <div className="flex space-x-4  
          w-full items-center justify-start">
            <div className="border-l-2
            border-yellow-500/80 px-2
            flex space-x-4 items-center justify-start">
            <motion.div 
            initial={{opacity:0.5, scale:0.8}}
            animate={{opacity:[0.5, 1, 0.5], scale:[1,0.8,1]}}
            transition={{duration:2, delay:2, repeat:Infinity, mode:easeInOut}}
            className="bg-red-500 w-4 h-4 rounded-full animate-pulse"/>
            <GlitchText className="text-yellow-300" text="Pre-Registrations are live right now!"
            speed={20}
            delay={0.6}/>
            </div>
          </div>
          <GlitchText
            className="bg-gradient-to-br bg-clip-text text-transparent from-white to-gray-400 
            text-8xl xl:text-9xl font-bold pr-2"
            style={{ fontFamily: "Oswald" }}
            text="INCUE"
            speed={1}
            delay={0.8}/>
          <GlitchText
            className="text-gray-400 text-sm sm:text-xl max-w-[70vw] md:max-w-[600px]"
            style={{ fontFamily: "Satoshi" }}
            text="We are the future of Event Listing, providing educational clubs with private and shareable web spaces to list and host their events for free."
            speed={1}
            delay={0.6}
            >
            
          </GlitchText>
          <Countdown />
          <div className="flex justify-end w-full border-r-1 border-yellow-500/50 px-2">
            <p className="text-gray-500">Until Launch, 2nd September 2025</p>
          </div>

          <Footer/>
        </motion.div>

        {/* Scroll Prompt */}
        <div className="hidden sm:flex flex-col items-center 
        justify-center text-center pb-[10vh] sm:pb-2 w-[60vw]">
          <a
            className="text-sm text-gray-500 flex flex-col items-center justify-center animate-bounce cursor-pointer"
            style={{ fontFamily: "Satoshi" }}
            href="#about" // optional: smooth scroll to 'About' section
          >
            Scroll To Know More About Us
            <ArrowDown className="w-5 h-5 mt-1" />
          </a>
        </div>

        <div className="flex sm:hidden w-[95vw] h-10 items-center border-b-1 border-t-1
        border-white/20 mb-5">
    <div className="overflow-hidden whitespace-nowrap relative">
      <div
        className="text-yellow-300 font-semibold tracking-wide"
        style={{
          animation: "marquee 25s linear infinite",
          whiteSpace: "nowrap",
          display: "inline-block"
        }}
      >
        {MarqueeText.map((text, i) => (
          <span key={i} style={{ marginRight: "4rem", display: "inline-block" }}>
            {text}
          </span>
        ))}
      </div>
    </div>

        </div>
        
      </div>
    </>
  );
}