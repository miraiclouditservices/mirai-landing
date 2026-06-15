"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the viewport is mobile or supports touch
    const isMobile = window.matchMedia("(max-width: 991.98px)").matches;
    const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    
    if (isMobile || supportsTouch) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    let rafId: number;
    const updateRingPosition = () => {
      // Smooth interpolation (linear interpolation with a lag factor of 0.15)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(updateRingPosition);
    };

    // Event delegation to capture mouseover on interactive nodes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "SELECT" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest(".service-card") !== null ||
        target.closest(".industry-card") !== null ||
        target.closest(".about-card") !== null ||
        target.closest(".faq-header") !== null ||
        target.closest(".social-btn") !== null;

      if (isInteractive) {
        dotRef.current?.classList.add("cursor-hover");
        ringRef.current?.classList.add("cursor-hover");
      } else {
        dotRef.current?.classList.remove("cursor-hover");
        ringRef.current?.classList.remove("cursor-hover");
      }
    };

    // Handle mouse click triggers
    const handleMouseDown = () => {
      dotRef.current?.classList.add("cursor-clicked");
      ringRef.current?.classList.add("cursor-clicked");
    };

    const handleMouseUp = () => {
      dotRef.current?.classList.remove("cursor-clicked");
      ringRef.current?.classList.remove("cursor-clicked");
    };

    // Hide custom cursor when mouse leaves the window viewport
    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      hasMoved = false; // Reset to fade back in nicely on re-entry
    };

    const handleMouseEnter = () => {
      // opacity will trigger in handleMouseMove upon move to avoid snaps
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Start animation frame
    rafId = requestAnimationFrame(updateRingPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
