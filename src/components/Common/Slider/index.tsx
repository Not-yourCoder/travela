import "keen-slider/keen-slider.min.css"
import { type ReactNode } from "react"

type CommonSliderProps = {
    children: ReactNode
    className?: string
    ref?: (node: HTMLElement | null) => void
}

export const CommonSlider = ({ children, className, ref }: CommonSliderProps) => {
    return (
        <div ref={ref} className={`keen-slider ${className}`}>
            {children}
        </div>
    )
}
