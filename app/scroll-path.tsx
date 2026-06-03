"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function ScrollPath() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const section = document.getElementById("story");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!path || !section || prefersReducedMotion) {
      if (path) {
        path.style.strokeDasharray = "none";
        path.style.strokeDashoffset = "0";
        path.style.opacity = "0.2";
      }
      return;
    }

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const lagDistance = viewport * 0.2;
      const trackedTop = rect.top + lagDistance;
      const start = viewport * 0.82;
      const end = -rect.height * 0.28;
      const raw = (start - trackedTop) / (start - end);
      const progress = Math.max(0, Math.min(1, raw - 0.06));
      const steppedProgress = Math.round(progress * 58) / 58;

      path.style.strokeDashoffset = `${pathLength * (1 - steppedProgress)}`;
      path.style.opacity = `${0.34 + steppedProgress * 0.66}`;
    };

    const scheduleUpdate = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className={styles.pathFrame} aria-hidden="true">
      <svg
        className={styles.pathGraphic}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 50,0 C 90,15 10,25 50,40 C 90,55 10,70 50,85 C 90,95 50,100 50,100"
          className={styles.pathStroke}
        />
      </svg>
    </div>
  );
}
