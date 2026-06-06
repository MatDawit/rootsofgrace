"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const NAV_ITEMS = [
  { id: "top", hrefTarget: "page-top", label: "Home" },
  { id: "story", hrefTarget: "story", label: "The Story" },
  { id: "author", hrefTarget: "author", label: "Author" },
  { id: "purchase", hrefTarget: "purchase", label: "Buy Now" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("top");
  const navRef = useRef<HTMLElement | null>(null);
  const manualNavUntilRef = useRef(0);

  const scrollToNavItem = (item: (typeof NAV_ITEMS)[number]) => {
    const target = document.getElementById(item.hrefTarget);

    if (!target) {
      return;
    }

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    if (window.location.hash !== `#${item.hrefTarget}`) {
      window.history.pushState(null, "", `#${item.hrefTarget}`);
    }
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => ({
      id: item.id,
      element: document.getElementById(item.id),
    })).filter(
      (entry): entry is { id: SectionId; element: HTMLElement } =>
        entry.element !== null,
    );

    if (sections.length === 0) return;

    const computeActiveSection = () => {
      if (Date.now() < manualNavUntilRef.current) {
        return;
      }

      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isNearPageBottom) {
        const lastSection = sections[sections.length - 1];
        setActiveSection((current) =>
          current === lastSection.id ? current : lastSection.id,
        );
        return;
      }

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const triggerY = window.scrollY + navHeight + 96;

      let nextActive: SectionId = "top";

      for (const section of sections) {
        const sectionTop =
          section.element.getBoundingClientRect().top + window.scrollY;

        if (triggerY >= sectionTop) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      setActiveSection((current) =>
        current === nextActive ? current : nextActive,
      );
    };

    let ticking = false;
    const scheduleCompute = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;
        computeActiveSection();
      });
    };

    computeActiveSection();
    window.addEventListener("scroll", scheduleCompute, { passive: true });
    window.addEventListener("resize", scheduleCompute);

    return () => {
      window.removeEventListener("scroll", scheduleCompute);
      window.removeEventListener("resize", scheduleCompute);
    };
  }, []);

  return (
    <header ref={navRef} className={styles.navbar}>
      <div className={styles.navInner}>
        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                className={isActive ? styles.navLinkActive : styles.navLink}
                href={`#${item.hrefTarget}`}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveSection(item.id);
                  manualNavUntilRef.current = Date.now() + 900;
                  scrollToNavItem(item);
                }}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
