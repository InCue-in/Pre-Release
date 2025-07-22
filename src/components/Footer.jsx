import { motion } from "framer-motion";

function getRandomColor() {
  const r = Math.floor(Math.random() * 80 + 50);   // 0–79
  const g = Math.floor(Math.random() * 80 + 50);
  const b = Math.floor(Math.random() * 80) + 50;
  return `rgb(${r}, ${g}, ${b})`;
}
export default function Footer() {

    const names = ["avichal", "deep", "shiv", "bhaskar"]    
    const colors = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
    return (
        <>
        <div className="flex w-full justify-end py-2 px-4 z-50">
            <div className="flex flex-col space-y-1"
            style={{fontFamily:"Satoshi"}}>
                <div className="flex space-x-2 justify-center items-center">
                    {names.map((name, index) => (
                        <motion.div 
                        initial={{ opacity:0, y:-200}}
                        animate={{ opacity:1, y:0}}
                        transition={{duration:parseInt(index)+1}}
                        key = {index}
                        className="rounded-full w-[25px]
                        text-bold"
                        style={{ backgroundColor: colors[index] }}>
                        {name[0].toUpperCase()}
                        </motion.div>
                    ))}
                    <p className="">+5</p>
                </div>
            <p className="text-[12px] text-gray-600">are viewing this site right now</p>
            </div>
        </div>  
        </>
    )
}