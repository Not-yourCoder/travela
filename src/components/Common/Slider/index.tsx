import "keen-slider/keen-slider.min.css"
import { useKeenSlider, type KeenSliderOptions } from "keen-slider/react"
import { type ReactNode } from "react"

type CommonSliderProps = {
    children: ReactNode
    options?: KeenSliderOptions
    className?: string
}

export const CommonSlider = ({ children, options, className }: CommonSliderProps) => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: "auto",
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: {
                    perView: 1.5,
                    spacing: 20,
                },
            },
            "(min-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 24,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 28,
                },
            },
        },
        ...options,
    })

    return (
        <div ref={sliderRef} className={`keen-slider ${className}`}>
            {children}
        </div>
    )
}
