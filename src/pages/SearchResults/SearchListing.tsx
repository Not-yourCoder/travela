import { HotelCard } from "@/components/Common/Cards/HotelCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hotelsData } from "@/constants";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const SearchListing = () => {
    const [sortBy, setSortBy] = useState('recommended');
    const navigate = useNavigate()
    return (
        <div className="flex-1 bg-gray-50" onClick={() => navigate({ to: "/hotel_details" })}>
            {/* Results Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Showing 568 properties in New Delhi</h1>
                    <div className="flex items-center space-x-4">
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recommended">Recommended</SelectItem>
                                <SelectItem value="price">Price</SelectItem>
                                <SelectItem value="rating">Rating</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Hotel Cards */}
            <div className="p-6 space-y-4">
                {hotelsData.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};
