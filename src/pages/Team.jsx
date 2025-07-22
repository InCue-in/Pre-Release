import { motion } from "framer-motion";
import { Quote, UserCircle2 } from "lucide-react";
import Avi from "../assets/Avi.png"
import Miku from "../assets/Miku.png"
import Pragati from "../assets/Pragati.png"
import Ambuj from "../assets/Ambuj.png"
import GlitchText from "../components/micro/Glitch";

const team = [
  {
    name: "#^#%^#T^#%",
    role: "Co-Founder and CTO",
    img: Ambuj,
    content:
      "We engineered Incue to eliminate inefficiencies. Seeing organizers automate registrations and focus on what truly matters is exactly why we built it.",
    text_color: "text-black",
    color: "from-[#fffcdb] to-[#ffd36e]", // bright gold sunrise (pops hard on black)
  },
  {
    name: "@%^$^&$#^#&",
    role: "Co-Founder and CEO",
    img: Avi,
    content:
      "Incue isn't just an event tool — it's a vision of what organizing should feel like in 2025. Seamless, smart, and scalable from day one.",
    text_color: "text-black",
    color: "from-[#00d9ff] to-[#0040ff]", // neon cyan to electric blue
  },
  {
    name: "#&$^$&$&#$",
    role: "Co-Founder and CMO",
    img: Miku,
    content:
      "We knew design had to do more than look good — it had to guide users intuitively. Incue’s interface builds trust from the first click.",
    text_color: "text-black",
    color: "from-[#f000ff] to-[#5000ff]", // vibrant magenta to deep violet
  },
  {
    name: "*)%*%&$&",
    role: "Co-Founder and COO",
    img: Pragati,
    content:
      "Operational clarity was our north star. With Incue, teams onboard faster, attendees stay engaged, and chaos turns into control.",
    text_color: "text-black",
    color: "from-[#c2ff6d] to-[#f5ffa1]", // neon lime to pastel yellow (very visible)
  },
];




export default function Team() {
    return (
    <>
    <div id="team" className="w-screen flex flex-col
    justify-center items-center pb-25">
        <div className="max-w-[98vw] sm:max-w-[60vw]">

        {/* Section Header */}
        <div className="text-center mb-16 z-10 relative">
            <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold font-oswald tracking-wide"
            >
            Our Team?
            </motion.h1>
          <div className="relative group w-full flex items-center justify-center">
            <p className="text-gray-400 mt-2 text-sm hidden group-hover:block">
              FRONTEND GUYS CARRIES THEM ALL
            </p>
            <p className="text-gray-400 mt-2 text-sm group-hover:hidden">
              Work Hard, Work Smart...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 relative">
            {team.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl backdrop-blur-sm flex flex-col justify-between
                hover:shadow-xl hover:shadow-white transition-all duration-1000
                ease-in-out min-h-[250px]`}
            >      
                <div className="flex space-x-5">
                    <img src={item.img}className="h-35 w-25 rounded-xl"></img>
                    <div className="text-left h-full flex flex-col justify-center space-y-2">
                        <div className="flex space-x-3">
                        <UserCircle2 className={`w-10 h-10 ${item.text_color}`} />
                        <div className="flex flex-col">
                        <p className={`font-bold ${item.text_color} text-lg`}>{item.name}</p>
                        <p className={`${item.text_color} text-xs`}>{item.role}</p>
                        </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                        <GlitchText className={`py-2 pl-2 ${item.text_color} text-left text-md leading-relaxed font-light`}
                        style={{fontFamily:"Satoshi"}}
                        text={item.content}
                        speed={2}/>
                        </div>

                    </div>
                </div>

            </motion.div>
            ))}
        </div>

        </div>



    </div>
    </>
    )
}