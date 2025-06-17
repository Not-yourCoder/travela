import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

export default function DatePickerDropdown() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer px-4">
                    <CalendarDays className="w-4 h-4" />
                    <span>{date ? format(date, "PP") : "Pick a date"}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
