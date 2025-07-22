import { Typewriter } from 'react-simple-typewriter';
import { easeInOut, motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Nav() {

    return (
        <>
        <div className="w-screen flex px-2 py-2 justify-between
        z-50 hidden sm:flex">
            <div className=''>
                <motion.p 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:5 }}
                className="text-3xl text-light text-yellow-500
                hover:tracking-widest transition-all duration-1000"
                style={{fontFamily:"Share Tech Mono", fontWeight:100}}>
                <Typewriter
                    words={['INCUE']}
                    loop={1}
                    cursor={false}
                    typeSpeed={300}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </motion.p>
                <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
                className="border-t-2 border-gray-500"
                />

            </div>
            <motion.button
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:5, delay:0.5 }}
            className="text-gray-400 rounded-xl px-4 py-2 z-50
            font-bold text-mb bg-transparent
            hover:bg-stone-800 hover:scale-110
            tracking-wide flex hover:text-white
            transition-all duration-1000 ease-in-out"
            style={{fontFamily:"Satoshi", fontWeight:700}}>
                Pre Register
                
                <motion.div
                initial={{ x:-100, y:100 }}
                animate={{ x:[-50,0], y:[50,0]}}
                transition={{duration:5, delay:0}}
                >
                <Rocket className='mx-1'></Rocket>
                </motion.div>
            </motion.button>
        </div>

         <div className="w-[100vw] flex px-4 pb-2 pt-4 justify-between backdrop-blur-sm
        z-50 flex sm:hidden mx-auto border-b-2 border-gray-400/20">
            <div className=''>
                <motion.p 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:5 }}
                className="text-xl text-light text-yellow-500 px-2
                hover:tracking-widest transition-all duration-1000"
                style={{fontFamily:"Share Tech Mono", fontWeight:100}}>
                <Typewriter
                    words={['INCUE']}
                    loop={1}
                    cursor={false}
                    typeSpeed={300}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </motion.p>
                <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
                className="border-t-2 border-gray-500"
                />

            </div>
            <motion.button
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:5, delay:0.5 }}
            className="text-gray-400 rounded-xl px-4 py-1 z-50
            font-bold text-mb bg-transparent text-sm
            hover:bg-stone-800 hover:scale-110
            tracking-wide flex hover:text-white
            transition-all duration-1000 ease-in-out"
            style={{fontFamily:"Satoshi", fontWeight:700}}>
                Pre Register
                
                <motion.div
                initial={{ x:-100, y:100 }}
                animate={{ x:[-50,0], y:[50,0]}}
                transition={{duration:5, delay:0}}
                >
                <Rocket className='mx-1 w-5 h-5'></Rocket>
                </motion.div>
            </motion.button>
        </div>
        </>
    )
}