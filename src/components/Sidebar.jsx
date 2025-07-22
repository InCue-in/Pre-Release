import { useEffect, useRef, useState } from "react";
import {
  UserCircle,
  Eye,
  TrendingUp,
  MessageCircleHeart,
  Users,
  Mail,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Semiborder from "./micro/Semiborder";
import { useVisibleSectionIndex } from "./micro/useVisibleSectionIndex";

export default function Sidebar({ scrollRef }) {
  const aboutref = useRef(null);
  const visionref = useRef(null);
  const progressref = useRef(null);
  const testimonialsref = useRef(null);
  const teamref = useRef(null);
  const contactref = useRef(null);

  const [about, setabout] = useState(true);
  const [vision, setvision] = useState(false);
  const [progress, setprogress] = useState(false);
  const [testimonials, settestimonials] = useState(false);
  const [team, setteam] = useState(false);
  const [contact, setcontact] = useState(false);

  const visibleIndex = useVisibleSectionIndex(0.5); // ID-based section detection
  const SECTION_IDS = ["about", "vision", "progress", "testimonials", "team", "contact"];

useEffect(() => {
  if (visibleIndex === null) return;

  setabout(visibleIndex === 0);
  setvision(visibleIndex === 1);
  setprogress(visibleIndex === 2);
  settestimonials(visibleIndex === 3);
  setteam(visibleIndex === 4);
  setcontact(visibleIndex === 5);
}, [visibleIndex]);

  const spawnVariant = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      filter: "blur(8px)",
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 1, 0.3, 1],
      },
    }),
  };

  const labelAnim = {
    hidden: { opacity: 0, scale: 0.6, y: -20, filter: "blur(4px)" },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 18,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      filter: "blur(6px)",
      transition: { duration: 0.4 },
    },
  };

  const labelAnimMobile = {
    hidden: { opacity: 0, scale: 0.6, x: -40, filter: "blur(4px)" },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 18,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: 40,
      filter: "blur(6px)",
      transition: { duration: 0.4 },
    },
  };

  const items = [
    { label: "ABOUT", icon: UserCircle, ref: aboutref, active: about },
    { label: "VISION", icon: Eye, ref: visionref, active: vision },
    { label: "PROGRESS", icon: TrendingUp, ref: progressref, active: progress },
    { label: "TESTIMONIALS", icon: MessageCircleHeart, ref: testimonialsref, active: testimonials },
    { label: "TEAM", icon: Users, ref: teamref, active: team },
    { label: "CONTACT", icon: Mail, ref: contactref, active: contact },
  ];

  return (
    <>
    <div
      className="flex flex-col space-y-6 px-1 py-16 w-[200px] h-[450px] z-50
        border-l-2 border-yellow-500/20 text-left bg-transparent
        rounded-full hidden sm:flex"
      style={{ fontFamily: 'Orbitron' }}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            ref={item.ref}
            custom={idx}
            variants={spawnVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 + idx * 0.2 }}
            onClick={() => {
              document.getElementById(SECTION_IDS[idx])?.scrollIntoView({ behavior: "smooth" });}}
            className="flex items-center space-x-2 text-xl
            hover:scale-110 transition-transform duration-300 relative h-[30px]"
          >
            <Icon className={item.active ? "text-yellow-300" : "text-gray-500"} />
            <AnimatePresence>
              {item.active && (
                <motion.div
                  variants={labelAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="relative px-2 py-1 bg-black/40 rounded-md border border-yellow-400/30"
                >
                  <Semiborder />
                  <span className="text-yellow-400 font-semibold tracking-wider text-xs">
                    {item.label}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
<div
  className="fixed bottom-0 left-0 flex flex-row px-5 h-fit w-screen z-50 py-5
    border-l-2 border-r-2 border-yellow-500/20 text-left backdrop-blur-[3px] justify-between
    rounded-full sm:hidden items-center"
  style={{ fontFamily: 'Orbitron' }}
>
  {items.map((item, idx) => {
    const Icon = item.icon;
    return (
      <motion.button
        key={idx}
        ref={item.ref}
        custom={idx}
        variants={spawnVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 + idx * 0.2 }}
        onClick={() => {
          document.getElementById(SECTION_IDS[idx])?.scrollIntoView({ behavior: "smooth" });}}
        className="relative flex flex-col-reverse items-center text-xl w-[40px] h-full"
      >
        <Icon className={item.active ? "text-yellow-300" : "text-gray-500"} />

        <AnimatePresence>
          {item.active && (
            <motion.div
              variants={labelAnimMobile}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute bottom-full mb-4 bg-black/40 px-2 py-1 rounded-md 
                         border border-yellow-400/30 z-50"
            >
              <Semiborder />
              <span className="text-yellow-400 font-semibold tracking-wider text-xs whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  })}
</div>


    </>
  );
}