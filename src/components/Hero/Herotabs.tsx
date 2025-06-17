import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { heroTabItems } from '@/constants'

export default function NavMenu() {
    const underlineRef = useRef<HTMLDivElement>(null)

    const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget
        const underline = underlineRef.current

        if (underline) {
            const { offsetLeft, offsetWidth } = target
            gsap.to(underline, {
                left: offsetLeft,
                width: offsetWidth,
                duration: 0.3,
                ease: 'power2.out',
            })
        }
    }

    const resetUnderline = () => {
        const underline = underlineRef.current
        if (underline) {
            gsap.to(underline, {
                width: 0,
                duration: 0.3,
                ease: 'power2.out',
            })
        }
    }

    useEffect(() => {
        // Position underline under first item initially
        const firstItem = document.querySelector('.nav-item') as HTMLButtonElement
        if (firstItem && underlineRef.current) {
            const { offsetLeft, offsetWidth } = firstItem
            gsap.set(underlineRef.current, {
                left: offsetLeft,
                width: offsetWidth,
            })
        }
    }, [])

    return (
        <div className="relative flex gap-6  font-medium">
            {heroTabItems.map((item, index) => (
                <button
                    key={index}
                    className="nav-item relative pb-2"
                    onMouseEnter={handleHover}
                    onMouseLeave={resetUnderline}
                >
                    {item}
                </button>
            ))}

            {/* Animated underline */}
            <div
                ref={underlineRef}
                className="absolute bottom-0 h-[2px] bg-white rounded transition-all"
                style={{ width: 0, left: 0 }}
            />
        </div>
    )
}
