import { useState, useEffect } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState(getRemainingTime());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(getRemainingTime());
    }, 800);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:gap-5 text-yellow-400 text-center drop-shadow-yellow w-full max-w-[90vw] sm:max-w-[600px] mx-auto"
      style={{ fontFamily: "Share Tech Mono, monospace" }}
    >
      {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
        <div key={unit} className="flex flex-col items-center justify-center space-y-1">
          <div className="bg-transparent rounded-xl shadow-lg px-3 sm:px-5 py-2 sm:py-3 
          text-xl sm:text-3xl md:text-5xl 
          transition-transform duration-300 hover:scale-105">
            <span style={{ fontFamily: "Satoshi" }}>
              {countdown[unit].toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400 tracking-widest">
            {unit.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

function getRemainingTime() {
  const targetDate = new Date("2025-09-01T23:59:59");
  const now = new Date();
  const diff = targetDate - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default Countdown;
