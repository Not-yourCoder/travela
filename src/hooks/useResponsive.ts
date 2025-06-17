import { breakpoints } from "@/constants";
import type { Breakpoint } from "@/types/responsive.types";
import { useState, useEffect } from "react";

interface ResponsiveState {
  width: number;
  height: number;
  breakpoint: Breakpoint;
  // Boolean helpers for each breakpoint
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  // Range helpers
  isSmAndUp: boolean;
  isMdAndUp: boolean;
  isLgAndUp: boolean;
  isXlAndUp: boolean;
  isSmAndDown: boolean;
  isMdAndDown: boolean;
  isLgAndDown: boolean;
  isXlAndDown: boolean;
  // Mobile/Desktop helpers
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useResponsive = (): ResponsiveState => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine current breakpoint
  const getCurrentBreakpoint = (width: number): Breakpoint => {
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
  };

  const currentBreakpoint = getCurrentBreakpoint(windowSize.width);

  return {
    width: windowSize.width,
    height: windowSize.height,
    breakpoint: currentBreakpoint,

    // Exact breakpoint matches
    isXs: currentBreakpoint === "xs",
    isSm: currentBreakpoint === "sm",
    isMd: currentBreakpoint === "md",
    isLg: currentBreakpoint === "lg",
    isXl: currentBreakpoint === "xl",
    is2Xl: currentBreakpoint === "2xl",

    // Range helpers (and up)
    isSmAndUp: windowSize.width >= breakpoints.sm,
    isMdAndUp: windowSize.width >= breakpoints.md,
    isLgAndUp: windowSize.width >= breakpoints.lg,
    isXlAndUp: windowSize.width >= breakpoints.xl,

    // Range helpers (and down)
    isSmAndDown: windowSize.width < breakpoints.md,
    isMdAndDown: windowSize.width < breakpoints.lg,
    isLgAndDown: windowSize.width < breakpoints.xl,
    isXlAndDown: windowSize.width < breakpoints["2xl"],

    // Device type helpers
    isMobile: windowSize.width < breakpoints.md,
    isTablet:
      windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
    isDesktop: windowSize.width >= breakpoints.lg,
  };
};
