import { motion } from "framer-motion";
import { Rocket, PlaneLandingIcon, Users, Lightbulb } from "lucide-react";
import GlitchText from "../components/micro/Glitch";
export default function About() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div id="vision" className="min-h-xl w-full text-white px-6 py-20 flex flex-col gap-32 items-center justify-start">
      <div className="w-[60vw] flex flex-col gap-32">
        {/* WHO */}
        <motion.div
          custom={0}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center justify-center text-left"
        >
          <Users className="text-[#00ffff] w-12 h-12 animate-pulse" />
          <div className="w-full text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white tracking-wide mb-3">
              Who are we?
            </h2>
            <GlitchText className="text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
              text="Just a group of students 🚀 fed up with long forms, WhatsApp groups, and endless
              promotions. We believe the future belongs in clean, smart web spaces—so we build
              for that."
              speed={5}>
            </GlitchText>
          </div>
        </motion.div>

        {/* WHY */}
        <motion.div
          custom={1}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center justify-center text-left"
        >
          <Lightbulb className="text-yellow-400 w-12 h-12 animate-bounce" />
          <div className="sm:w-[30vw] text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white tracking-wide mb-3">
              Why are we?
            </h2>
            <GlitchText className="text-md md:text-xl max-w-xl text-gray-200 leading-relaxed"
              text="Our aim? Make event listing simple and accessible 🌐.
              Our goal? One-click registrations, zero procrastination."
              speed={5}>
            </GlitchText>
          </div>
        </motion.div>

        {/* WHAT */}
        <motion.div
          custom={2}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center justify-center text-left"
        >
          <Rocket className="text-red-400 w-12 h-12 animate-spin-slow" />
          <div className="w-full text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white tracking-wide mb-3">
              What are we?
            </h2>
            <GlitchText className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed"
              text="We’re a web-app 🌌. Just register once, and we auto-fill your event forms in seconds.
              For organizers? Add your event details—our system turns it into a beautifully
              displayed, high-converting showcase."
              speed={5}>
            </GlitchText>
          </div>
        </motion.div>
      </div>

    </div>
  );
}