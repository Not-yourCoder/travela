import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin } from "lucide-react"
import { useState } from "react"

const locations = [
    { city: "London", country: "United Kingdom" },
    { city: "New York", country: "United States" },
    { city: "Paris", country: "France" },
    { city: "Madrid", country: "Spain" },
    { city: "Santorini", country: "Greece" },
]

export default function LocationDropdown() {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer px-4">
                    <MapPin className="w-4 h-4" />
                    <span>Where are you going?</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-64">
                <div className="space-y-2">
                    <Input placeholder="Search city..." />
                    <div>
                        {locations.map((loc, idx) => (
                            <div key={idx} className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                                <p className="font-semibold">{loc.city}</p>
                                <p className="text-sm text-muted-foreground">{loc.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
