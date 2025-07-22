import { motion } from "framer-motion";
import { Sparkles, Quote, UserCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "College Event Head",
    content:
      "Incue made managing event registrations unbelievably smooth. We saved hours of manual work.",
    color: "from-[#00ff] to-[#0077ff]",
  },
  {
    name: "Aarav Mehta",
    role: "Tech Society Leader",
    content:
      "Our tech fest launch was effortless with Incue. Truly futuristic.",
    color: "from-[#ff3c3c] to-[#7a0000]",
  },
  {
    name: "Sneha Iyer",
    role: "Cultural Committee",
    content:
      "Finally, a platform that feels like it belongs in 2025. The UI? Just wow.",
    color: "from-[#7c2dfc] to-[#1f005c]",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-screen w-full flex items-center justify-center text-white px-8 py-20 font-sans relative overflow-hidden">
        <div className="sm:max-w-[60vw]">

        {/* Section Header */}
        <div className="text-center mb-16 z-10 relative">
            <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold font-oswald tracking-wide"
            >
            <Sparkles className="inline-block w-8 h-8 text-cyan-300 mr-2 animate-pulse" />
            Voices From the Stars
            </motion.h1>
            <p className="text-gray-400 mt-2 text-sm">Real feedback from those who dared to innovate.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 z-10 relative">
            {testimonials.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl backdrop-blur-sm flex flex-col justify-between`}
            >
                <Quote className="w-6 h-6 text-white mb-4" />
                <p className="text-white text-md leading-relaxed">{item.content}</p>
                <div className="flex items-center space-x-3 mt-6">
                <UserCircle2 className="w-10 h-10 text-white/80" />
                <div>
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-gray-200 text-xs">{item.role}</p>
                </div>
                </div>
            </motion.div>
            ))}
        </div>

        {/* Floating Glow 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00fff0] to-[#1100ff] blur-[150px] z-0"
        />*/}
    </div>
    </div>
  );
}
