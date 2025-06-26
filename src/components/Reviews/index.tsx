import InformationCard from "../Cards/InformationCard";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const ReviewsSection = () => {
    const categories = [
        { name: 'Hospitality', rating: 4.9 },
        { name: 'Facilities', rating: 4.7 },
        { name: 'Food', rating: 4.6 },
        { name: 'Room', rating: 4.6 },
        { name: 'Cleanliness', rating: 4.8 },
        { name: 'Value For Money', rating: 4.5 }
    ];

    const ratingDistribution = [
        { stars: 5, percentage: 84 },
        { stars: 4, percentage: 12 },
        { stars: 3, percentage: 2 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 2 }
    ];

    return (
        <InformationCard>

            <h2 className="text-xl font-bold mb-4">User Rating & Reviews</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded text-2xl font-bold">
                            4.7
                        </div>
                        <div>
                            <div className="text-lg font-semibold">Excellent</div>
                            <div className="text-sm text-gray-600">2177 Ratings</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {ratingDistribution.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-sm w-12">{item.stars === 5 ? 'Excellent' : item.stars === 4 ? 'Very Good' : item.stars === 3 ? 'Average' : item.stars === 2 ? 'Poor' : 'Bad'}</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm w-8">{item.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Rating Categories</h3>
                    <div className="space-y-3">
                        {categories.map((category, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-sm">{category.name}</span>
                                <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                    {category.rating}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {['All Reviews', 'Staff Courtesy', 'Service Quality', 'Food', 'Patio', 'Room Quality', 'Location', 'Natural Beauty', 'Breakfast', 'Balcony', 'Space In Rooms'].map((filter, index) => (
                        <Button
                            key={index}
                            variant={index === 0 ? "default" : "outline"}
                            size="sm"
                            className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>

                <div className="space-y-4">
                    <Card className="bg-gray-50 text-slate-800 p-4 rounded-lg shadow-sm border-gray-300/50 border-2">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-orange-500 text-white px-2 py-1 rounded text-sm">3.0</div>
                                <span className="font-semibold">old property, needs renovation.</span>
                            </div>
                            <div className="text-sm text-gray-900 mb-2">Vandana V. • Couple</div>
                            <p className="text-sm text-gray-800 mb-2">
                                Old property. Needs renovation. Food is average. Limited amenities. Small room size. Old furniture.
                            </p>
                            <div className="text-xs text-gray-400">Travel Month: Jun 2025</div>
                            <div className="text-xs text-gray-400">Room: Deluxe Room with Private Balcony</div>
                            <Button variant="link" className="text-blue-400 p-0 h-auto text-sm">
                                Helpful 👍
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-50 text-slate-800 p-4 rounded-lg shadow-sm border-gray-300/50 border-2">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-green-500 text-white px-2 py-1 rounded text-sm">5.0</div>
                                <span className="font-semibold">Excellent Stay</span>
                            </div>
                            <div className="text-sm text-gray-900 mb-2">Ashish S. • Family With 1 Kid</div>
                            <p className="text-sm text-gray-800 mb-2">
                                The hotel stay was pleasant with clean rooms, friendly staff, and excellent location. Amenities were satisfactory, though breakfast options could be improved. Overall, a comfortable stay experience that met expectations and provided good value for money. Would consider returning again.
                            </p>
                            <div className="text-xs text-gray-400">Travel Month: Jun 2025</div>
                            <div className="text-xs text-gray-400">Room: Deluxe Room with Private Balcony</div>
                            <Button variant="link" className="text-blue-400 p-0 h-auto text-sm">
                                Helpful 👍
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </InformationCard>
    );
};