import { Coffee, Dumbbell, Utensils, Waves, Wine } from "lucide-react";
import { Button } from "../ui/button";
import InformationCard from "../Cards/InformationCard";

export const AmenitiesSection = () => {
    const amenities = [
        { icon: Waves, label: 'Spa' },
        { icon: Waves, label: 'Swimming Pool' },
        { icon: Dumbbell, label: 'Gym' },
        { icon: Utensils, label: 'Restaurant' },
        { icon: Coffee, label: 'Butler Services' },
        { icon: Wine, label: 'Lounge' },
        { icon: Wine, label: 'Bar' }
    ];

    return (
        <InformationCard>

            <h2 className="text-xl font-bold mb-4">Amenities</h2>
            <p className="text-sm text-gray-600 mb-4">Amenities rated 4.7 by guests</p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {amenities.map((amenity, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-2">
                        <amenity.icon className="w-6 h-6 mb-2 text-gray-600" />
                        <span className="text-sm text-gray-700">{amenity.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm">Steam and Sauna</span>
                </div>
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                    + More Amenities
                </Button>
            </div>
        </InformationCard>
    );
};