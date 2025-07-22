import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "vision", "progress", "testimonials", "team", "contact"];

export function useVisibleSectionIndex(threshold = 0.5) {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const observers = [];
    const visibilityMap = {};

    SECTION_IDS.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.isIntersecting;

          const firstVisibleId = SECTION_IDS.find((secId) => visibilityMap[secId]);
          if (firstVisibleId) {
            const visibleIndex = SECTION_IDS.indexOf(firstVisibleId) + 0; // 1-based index
            setIndex(visibleIndex);
          }
        },
        {
          threshold,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [threshold]);
  console.log(index)
  return index;
}
