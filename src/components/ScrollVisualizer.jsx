import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollVisualizer({ scrollRef }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollY(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);
    return (
        <>
             <motion.div 
             initial={{ opacity:0, x:100}}
             animate={{ opacity:1, x:0 }}
             transition={{ duration:1.5, delay:0.5 }}
             className="fixed right-2 h-70 w-10 rounded-full mx-2
              border-r-1 justify-end flex px-1 py-4 z-50
              border-white/50 rounded-full hidden sm:flex">
                <div className="sticky top-0 right-0 h-4 w-2 bg-yellow-500 rounded-full"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}>

                </div>
             </motion.div>
             <motion.div 
             initial={{ opacity:0, x:100}}
             animate={{ opacity:1, x:0 }}
             transition={{ duration:1.5, delay:0.5 }}
             className="fixed bottom-[15%] left-2 h-40 rounded-full mx-2
              border-l-1 justify-end flex px-1 py-4 z-50 bg-yellow-300/2
              border-white/50 rounded-full flex sm:hidden">
                <div className="sticky top-0 right-0 h-4 w-2 bg-yellow-500 rounded-full"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}>

                </div>
             </motion.div>
        </>       
    )
}