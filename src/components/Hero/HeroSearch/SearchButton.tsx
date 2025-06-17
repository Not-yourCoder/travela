import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchButton() {
    return (
        <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
            <Search className="w-4 h-4" />
            Search
        </Button>
    )
}
