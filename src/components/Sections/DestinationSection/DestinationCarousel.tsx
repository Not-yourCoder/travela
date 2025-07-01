"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DestinationCard from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";

const destinations = [
    { title: "New York", image: "https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Barcelona", image: "https://images.unsplash.com/photo-1578912996078-305d92249aa6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "New York", image: "https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Barcelona", image: "https://images.unsplash.com/photo-1578912996078-305d92249aa6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const DestinationsCarousel = () => {
    const { isMobile } = useResponsive()
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: isMobile ? 1 : 4,
            spacing: 24,
        },
    });

    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider">
                {destinations.map((dest, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <DestinationCard {...dest} />
                    </div>
                ))}
            </div>

            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default DestinationsCarousel;
