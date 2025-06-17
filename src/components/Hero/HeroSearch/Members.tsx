import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Users } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function GuestDropdown() {
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(1)
    const [rooms, setRooms] = useState(1)

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer px-4">
                    <Users className="w-4 h-4" />
                    <span>{`${adults} adults - ${children} children - ${rooms} room`}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-64 space-y-4">
                <div className="flex justify-between items-center">
                    <p>Adults</p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setAdults(adults - 1)}>-</Button>
                        <span>{adults}</span>
                        <Button size="sm" variant="outline" onClick={() => setAdults(adults + 1)}>+</Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p>Children</p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setChildren(children - 1)}>-</Button>
                        <span>{children}</span>
                        <Button size="sm" variant="outline" onClick={() => setChildren(children + 1)}>+</Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p>Rooms</p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setRooms(rooms - 1)}>-</Button>
                        <span>{rooms}</span>
                        <Button size="sm" variant="outline" onClick={() => setRooms(rooms + 1)}>+</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
