import type { Breakpoint } from "@/types/responsive.types"
import { useResponsiveComponent } from "."

export const ResponsiveWrapper = ({
    children,
    breakpoint
}: {
    children: React.ReactNode
    breakpoint: Breakpoint | 'mobile' | 'tablet' | 'desktop'
}) => {
    const { showOn } = useResponsiveComponent()

    if (!showOn([breakpoint])) return null

    return <>{children}</>
  }