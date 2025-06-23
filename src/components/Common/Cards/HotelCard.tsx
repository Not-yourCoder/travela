/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "../Rating";
import { Coffee, MapPin, Wifi } from "lucide-react";


type Props = {
    hotel: Record<string, any>
}
export const HotelCard = ({ hotel }: Props) => {


    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
                <div className="flex">
                    {/* Image */}
                    <div className="w-80 h-64 bg-gray-200 relative flex-shrink-0">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-black/50 text-white hover:bg-black/50">
                            MakeMyTrip
                        </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hotel.name}</h3>
                                <div className="flex items-center mb-2">
                                    <StarRating rating={hotel.rating} />
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{hotel.location}</span>
                                </div>
                                <div className="text-sm text-gray-500 mb-4">{hotel.distance}</div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <Badge className="bg-green-500 hover:bg-green-500 text-white">
                                        {hotel.rating.toFixed(1)}/5
                                    </Badge>
                                    {hotel.payAtHotel && (
                                        <span className="text-sm text-gray-600">Pay at Hotel</span>
                                    )}
                                </div>

                                {/* Amenities */}
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    {hotel.amenities.freeWifi && (
                                        <div className="flex items-center">
                                            <Wifi className="w-4 h-4 mr-1" />
                                            <span>Free Wifi</span>
                                        </div>
                                    )}
                                    {hotel.amenities.freeBreakfast && (
                                        <div className="flex items-center">
                                            <Coffee className="w-4 h-4 mr-1" />
                                            <span>Free Breakfast</span>
                                        </div>
                                    )}
                                    {hotel.amenities.freeCancellation && (
                                        <span>Free Cancellation</span>
                                    )}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-right ml-6">
                                <div className="text-sm text-gray-500 line-through">₹{hotel.originalPrice.toLocaleString()}</div>
                                <div className="text-2xl font-bold text-gray-900">₹{hotel.price.toLocaleString()}</div>
                                <div className="text-sm text-gray-500">per night for 2 rooms</div>
                                {hotel.corporateFare && (
                                    <Badge variant="outline" className="text-orange-600 border-orange-600 mt-1">
                                        Corporate Fare
                                    </Badge>
                                )}
                                {hotel.specialOffer && (
                                    <div className="text-xs text-green-600 mt-1">{hotel.specialOffer}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};