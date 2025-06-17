import { useResponsive } from "@/hooks/useResponsive"
import type { Breakpoint } from "@/types/responsive.types"

export const useResponsiveComponent = () => {
    const responsive = useResponsive()

    const renderForBreakpoint = <T,>(
        components: Partial<Record<Breakpoint | 'mobile' | 'tablet' | 'desktop', T>>
    ): T | null => {
        // Check device types first
        if (responsive.isMobile && components.mobile) return components.mobile
        if (responsive.isTablet && components.tablet) return components.tablet
        if (responsive.isDesktop && components.desktop) return components.desktop

        // Check specific breakpoints (from largest to smallest)
        if (responsive.is2Xl && components['2xl']) return components['2xl']
        if (responsive.isXl && components.xl) return components.xl
        if (responsive.isLg && components.lg) return components.lg
        if (responsive.isMd && components.md) return components.md
        if (responsive.isSm && components.sm) return components.sm
        if (responsive.isXs && components.xs) return components.xs

        return null
    }

    const hideOn = (breakpoints: (Breakpoint | 'mobile' | 'tablet' | 'desktop')[]): boolean => {
        return breakpoints.some(bp => {
            switch (bp) {
                case 'mobile': return responsive.isMobile
                case 'tablet': return responsive.isTablet
                case 'desktop': return responsive.isDesktop
                case 'xs': return responsive.isXs
                case 'sm': return responsive.isSm
                case 'md': return responsive.isMd
                case 'lg': return responsive.isLg
                case 'xl': return responsive.isXl
                case '2xl': return responsive.is2Xl
                default: return false
            }
        })
    }

    const showOn = (breakpoints: (Breakpoint | 'mobile' | 'tablet' | 'desktop')[]): boolean => {
        return !hideOn(breakpoints)
    }

    return {
        ...responsive,
        renderForBreakpoint,
        hideOn,
        showOn,
    }
}
  