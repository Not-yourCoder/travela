"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { CustomDialog } from "../Common/Dialog"

export const ImageGallery = () => {
    const [activeImage, setActiveImage] = useState("")
    const [currentType, setCurrentType] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    // 👇 dynamic images from API (mock)
    const photosByType: Record<string, string[]> = {
        property: [
            "https://images.unsplash.com/photo-1631049035115-f96132761a38?w=600",
            "https://unsplash.com/photos/brown-wooden-bed-frame-with-white-cover-beside-brown-wooden-nightstand-FqqiAvJejto",
            "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-paintings-dYyBb1Kgcms",
        ],
        room: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
            "https://images.unsplash.com/photo-1589395937772-fd6d6b285b43?w=600",
            "https://images.unsplash.com/photo-1616627986316-430f1bbd6840?w=600",
        ],
        guest: [
            "https://unsplash.com/photos/3d-render-of-luxury-hotel-room-wnA23EFrwNw",
            "https://unsplash.com/photos/3d-render-of-luxury-hotel-room-wnA23EFrwNw",
            "https://unsplash.com/photos/3d-render-of-luxury-hotel-room-wnA23EFrwNw",
        ],
    }

    const handleOpenDialog = (type: string) => {
        setCurrentType(type)
        setActiveImage(photosByType[type][0])
        setIsOpen(true)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3 gap-4">
            {Object.keys(photosByType).map((type, idx) => (
                <CustomDialog
                    key={idx}
                    open={isOpen && currentType === type}
                    onOpenChange={setIsOpen}
                    trigger={
                        <div
                            className={`relative cursor-pointer ${type === "property" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                            onClick={() => handleOpenDialog(type)}
                        >
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={photosByType[type][0]}
                                    alt={type}
                                    className={`w-full ${type === "property" ? "h-full" : "h-48"
                                        } object-cover`}
                                />
                            </div>
                            <Badge className="absolute bottom-2 left-2 bg-black/70 text-white text-xs capitalize">
                                +{photosByType[type].length} {type} Photos
                            </Badge>
                        </div>
                    }
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left */}
                        <div className="flex-1 p-2">
                            <img
                                src={activeImage}
                                alt="Active"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>

                        {/* Right */}
                        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 overflow-y-auto max-h-[80vh]">
                            {photosByType[type].map((photo, idx) => (
                                <img
                                    key={idx}
                                    src={photo}
                                    onClick={() => setActiveImage(photo)}
                                    className="cursor-pointer rounded-lg object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </CustomDialog>
            ))}
        </div>
    )
}
