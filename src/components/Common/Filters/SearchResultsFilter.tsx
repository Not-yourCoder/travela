import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { FilterItem } from "./FilterItem";
import { Slider } from "@/components/ui/slider";

export const FilterSidebar = () => {
    const [priceRange, setPriceRange] = useState([0]);
    const [filters, setFilters] = useState({
        freeCancellation: false,
        payAtHotel: false,
        corporateFare: false,
        freeBreakfast: false,
        freeWifi: false
    });

    const handleFilterChange = (filterName: string, checked: boolean) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: checked
        }));
    };

    return (
        <div className="w-80 bg-white border-r border-gray-200 p-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <Button variant="link" className="text-orange-500 p-0 h-auto font-medium">
                    Reset All
                </Button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search by Hotel name"
                        className="pr-10"
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            {/* Filter Sections */}
            <Accordion type="multiple" defaultValue={["popular", "price", "amenities"]} className="mb-6">
                {/* Popular Filters */}
                <AccordionItem value="popular">
                    <AccordionTrigger className="text-base font-medium">Popular Filters</AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-3">
                        <FilterItem
                            label="Free Cancellation"
                            count="560"
                            checked={filters.freeCancellation}
                            onCheckedChange={(checked: boolean) => handleFilterChange('freeCancellation', checked)}
                        />
                        <FilterItem
                            label="Pay at Hotel"
                            count="142"
                            checked={filters.payAtHotel}
                            onCheckedChange={(checked: boolean) => handleFilterChange('payAtHotel', checked)}
                        />
                        <FilterItem
                            label="Corporate Fare"
                            count="93"
                            checked={filters.corporateFare}
                            onCheckedChange={(checked: boolean) => handleFilterChange('corporateFare', checked)}
                        />
                        <FilterItem
                            label="Free Breakfast"
                            count="245"
                            checked={filters.freeBreakfast}
                            onCheckedChange={(checked: boolean) => handleFilterChange('freeBreakfast', checked)}
                        />
                        <FilterItem
                            label="Free Wifi"
                            count="310"
                            checked={filters.freeWifi}
                            onCheckedChange={(checked: boolean) => handleFilterChange('freeWifi', checked)}
                        />
                    </AccordionContent>
                </AccordionItem>

                {/* Price Per Night */}
                <AccordionItem value="price">
                    <AccordionTrigger className="text-base font-medium">Price Per Night</AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-3">
                        <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={30000}
                            step={1000}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>₹ 0</span>
                            <span>₹ 30,000</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Amenities */}
                <AccordionItem value="amenities">
                    <AccordionTrigger className="text-base font-medium">Amenities</AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-3">
                        <FilterItem label="Free wifi" count="178" />
                        <FilterItem label="24 Hours Front Desk" count="220" />
                        <FilterItem label="Elevator" count="135" />
                        <FilterItem label="Air Conditioning" count="120" />
                        <FilterItem label="Swimming Pool" count="53" />
                        <FilterItem label="Spa" count="75" />
                        <FilterItem label="Room Service" count="120" />
                        <FilterItem label="Restaurant" count="356" />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};