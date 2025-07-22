import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full px-6 pt-12 pb-20 backdrop-blur-md bg-white/5 border-t border-white/10 text-white"
      style={{ fontFamily: "Satoshi" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Brand & Message */}
        <div className="text-center md:text-left space-y-2">
          <h2
            className="text-3xl font-bold bg-gradient-to-br from-[#00f7ff] to-[#8a2be2] text-transparent bg-clip-text"
            style={{ fontFamily: "Orbitron" }}
          >
            Contact Us
          </h2>
          <p className="text-sm text-gray-300">We'd love to hear from you — reach out any time!</p>
        </div>

        {/* Center: Contact Info */}
        <div className="text-sm text-center md:text-left space-y-2">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt className="text-[#00f7ff]" />
            <a href="tel:+918810883106" className="hover:text-[#00f7ff] transition">+91 98765 43210</a>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-[#00f7ff]" />
            <a href="mailto:n" className="hover:text-[#00f7ff] transition">team@incue.in</a>
          </div>
        </div>

        {/* Right: Buttons & Links */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <a
            href=""
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f7ff] to-[#8a2be2] text-black font-semibold hover:scale-105 transition"
          >
            <FaWhatsapp /> Join WhatsApp Community
          </a>
          <a
            href="/register"
            className="underline underline-offset-4 hover:text-[#00f7ff] transition"
          >
            Register Your Club
          </a>
          <div className="flex gap-4 mt-2 text-lg">
            <a href="https://instagram.com/incue" target="_blank"><FaInstagram className="hover:text-[#ff66c4]" /></a>
            <a href="https://linkedin.com/incue" target="_blank"><FaLinkedin className="hover:text-[#00aaff]" /></a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-center text-gray-500">© {new Date().getFullYear()} Incue. All rights not reserved.</p>
    </motion.footer>
  );
}
