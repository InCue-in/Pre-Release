import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { month: "June", title: "Ideation", description: "Initial concept, planning, and brainstorming began." },
  { month: "July", title: "Pre-launch", description: "Sneak peeks, user feedback, and private testing." },
  { month: "August", title: "Launch", description: "Official public launch of Incue 🚀" },
];

export default function Progress() {
  return (
    <div id="progress" className="min-h-fit text-white p-8 items-center justify-center flex flex-col" style={{ fontFamily: "Satoshi" }}>
      <h1 className="text-4xl font-bold mb-6 text-white
       text-center border-b-3 border-yellow-500/20 p-2">
        🚧 Our Journey So Far
      </h1>

      <div className="relative pl-6 ml-2 w-fit border-l-2 border-yellow-500/20">
        {milestones.map((milestone, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={isInView ? { opacity: 1, x: 0, height: "100%" } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10"
            >
              <p className="text-sm text-gray-400 text-left" style={{ fontFamily: "Share Tech Mono" }}>
                {milestone.month}
              </p>
              <h2 className="text-xl font-semibold text-left text-yellow-500">{milestone.title}</h2>
              <p className="text-gray-300 text-left">{milestone.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full flex flex-col items-center">
        <div className="border-r-1 p-2 border-yellow-500/20">
          <p className="mb-2 text-sm text-gray-400 text-left" style={{ fontFamily: "Share Tech Mono" }}>
            Progress:
          </p>
          <div className="w-[40vw] bg-white/10 h-2 rounded overflow-hidden flex">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "66%" }}
              transition={{ duration: 1 }}
              className="h-2 bg-gradient-to-r from-[#00fff0] to-[#00b3ff]"
            />
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "34%" }}
              transition={{ duration: 1 }}
              className="h-2 bg-gradient-to-r from-stone-800 to-gray-900"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">We're currently in pre-launch 🚧</p>
        </div>
      </div>
    </div>
  );
}
