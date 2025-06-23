import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/react-router"

export default function SearchButton() {
    const navigate = useNavigate()
    return (
        <Button className="gap-2 bg-primary text-white hover:bg-primary/90 rounded-full" onClick={() => navigate({ href: "/search_results" })}>
            <Search className="w-4 h-4" />
            Search
        </Button>
    )
}
