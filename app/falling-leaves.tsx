"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const ANIMATIONS = ["jacarandaLeafFall", "jacarandaLeafFallR"] as const;

export default function FallingLeaves() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      container.replaceChildren();
      return;
    }

    const timers = new Set<number>();

    const createLeaf = () => {
      const leaf = document.createElement("span");
      leaf.className = `${styles.leaf} ${styles.dynamicLeaf}`;

      const size = Math.random() * 9 + 13; // 13-22 px
      const startX = Math.random() * 100;
      const duration = Math.random() * 4 + 5; // 5-9 s
      const delay = Math.random() * 0.6;
      const anim = ANIMATIONS[Math.random() < 0.5 ? 0 : 1];

      leaf.style.width = `${size}px`;
      leaf.style.height = `${size * 0.7}px`;
      leaf.style.left = `${startX}%`;
      leaf.style.top = "0px";
      // Use global keyframe names directly to avoid CSS module scoping issues.
      leaf.style.animation = `${anim} ${duration}s ease-in ${delay}s forwards`;

      container.appendChild(leaf);

      const removeId = window.setTimeout(
        () => {
          timers.delete(removeId);
          if (leaf.parentNode === container) container.removeChild(leaf);
        },
        (duration + delay + 1) * 1000,
      );
      timers.add(removeId);
    };

    // Stagger initial leaves so the hero is not flooded on mount.
    for (let i = 0; i < 20; i++) {
      const id = window.setTimeout(createLeaf, Math.random() * 3000);
      timers.add(id);
    }

    // Keep a gentle ongoing trickle after the initial burst.
    const intervalId = window.setInterval(createLeaf, 450);

    return () => {
      window.clearInterval(intervalId);
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
      container.replaceChildren();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.heroLeaves} aria-hidden="true" />
  );
}
