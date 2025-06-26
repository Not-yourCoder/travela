import { Card, CardContent } from "../ui/card";

export const ExperienceCards = () => {
    const experiences = [
        { title: 'Romantic Evening Under Starry Sky', icon: '🌟' },
        { title: 'Rooms with Private Balcony', icon: '🏠' },
        { title: 'The Oberoi Spa', icon: '💆' },
        { title: 'Fine Dining', icon: '🍽️' }
    ];

    return (
        <div className="bg-gray-50 p-4 md:p-6">
            <h2 className="text-xl font-bold mb-4">Discover the Best of Luxury</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {experiences.map((exp, index) => (
                    <Card key={index} className="bg-gradient-to-br from-amber-400 to-orange-500 text-white overflow-hidden">
                        <CardContent className="p-4 text-center">
                            <div className="text-2xl mb-2">{exp.icon}</div>
                            <h3 className="font-semibold text-sm">{exp.title}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};