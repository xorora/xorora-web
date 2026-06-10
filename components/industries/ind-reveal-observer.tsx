"use client";

import { useEffect } from "react";

export function IndRevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".ind-reveal"));
    if (elements.length === 0) return;

    const reveal = (el: Element) => el.classList.add("in");

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          for (const el of elements) observer?.observe(el);
        });
      });
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          for (const el of elements) reveal(el);
        });
      });
    }

    const timeout = setTimeout(() => {
      for (const el of elements) reveal(el);
    }, 1400);

    return () => {
      observer?.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
