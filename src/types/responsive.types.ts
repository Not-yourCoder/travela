import type { breakpoints } from "@/constants";

export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[Breakpoint];
