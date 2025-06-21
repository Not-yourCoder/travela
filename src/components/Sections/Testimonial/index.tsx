import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { testimonials, testimonialStats } from "@/constants";
import { Star } from "lucide-react";


export default function TestimonialSection() {
    return (
        <section className="bg-blue-50 container mx-auto py-12 space-y-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What our customers are saying us?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
                        justo.
                    </p>

                    <div className="flex space-x-12">
                        <div>
                            <p className="text-3xl font-semibold text-gray-900">
                                {testimonialStats.happyPeople}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">Happy People</p>
                        </div>

                        <div>
                            <p className="text-3xl font-semibold text-gray-900">
                                {testimonialStats.overallRating}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">Overall rating</p>

                            <div className="flex space-x-1 mt-2">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {testimonials.map((t, idx) => (
                        <Card key={idx} className="p-6 bg-white">
                            <div className="flex items-center mb-4">
                                <Avatar className="h-12 w-12 mr-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                </Avatar>
                                <div>
                                    <p className="font-medium text-gray-900">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-base">{t.review}</p>
                        </Card>
                    ))}

                    {/* pagination indicator */}
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-gray-800 text-sm">01</span>

                        <div className="flex-1 mx-3 h-[2px] bg-gray-300 relative">
                            <div className="absolute h-[2px] bg-blue-800 w-1/3 left-0" />
                        </div>

                        <span className="text-gray-800 text-sm">03</span>
                    </div>
                </div>
            </div>
        </section>
    );
}