import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#__937648274";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function GlitchText({
  text,
  className,
  style = {},
  speed = 20,
  delay = 0, // delay in ms before animation starts
}) {
    return (
    <span className={className} style={style}>
      {text}
    </span>
  );
}

function GlitchTex({
  text,
  className,
  style = {},
  speed = 20,
  delay = 0, // delay in ms before animation starts
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  const [displayed, setDisplayed] = useState("");
  const [frame, setFrame] = useState(-1); // -1 to indicate pre-delay

  useEffect(() => {
    if (!isInView) return;

    const start = () => setFrame(0);
    const timeoutId = setTimeout(start, delay*1000);

    return () => clearTimeout(timeoutId);
  }, [isInView, delay]);

  useEffect(() => {
    if (!isInView || frame === -1) return;

    let mounted = true;

    const update = () => {
      const output = text
        .split("")
        .map((char, i) => (i < frame ? char : randomChar()))
        .join("");

      if (mounted) setDisplayed(output);

      if (frame <= text.length) {
        setTimeout(() => {
          if (mounted) setFrame((f) => f + 1);
        }, speed);
      }
    };

    update();
    return () => {
      mounted = false;
    };
  }, [frame, text, speed, isInView]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayed}
    </span>
  );
}
