import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

type Props = {
    image: string;
    title: string;
    location: string;
    rating: number;
    reviews: number;
    price: string;
    badgeText?: string;
};

const RecommendedCard = ({
    image,
    title,
    location,
    rating,
    reviews,
    price,
    badgeText,
}: Props) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow group w-full lg:w-80 mx-auto">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Optional Top Badge */}
                {badgeText && (
                    <div className="absolute top-3 left-3">
                        <Badge variant="secondary">{badgeText}</Badge>
                    </div>
                )}

                {/* Favorite Icon */}
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow">
                    <Heart className="h-4 w-4 text-gray-800" />
                </button>
            </div>

            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="text-sm text-gray-500">{location}</p>

                <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded">
                        {rating}
                    </span>
                    <span className="font-medium">Exceptional</span>
                    <span className="text-gray-500">{reviews.toLocaleString()} reviews</span>
                </div>

                <p className="text-sm">
                    Starting from <span className="text-blue-600 font-medium">{price}</span>
                </p>
            </div>
        </div>
    );
};

export default RecommendedCard;
