import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RecommendedCard from "./RecommendationCard";
import { recommendedData } from "@/constants";


const RecommendedSection = () => {
    return (
        <section className="container mx-auto py-12 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Recommended</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Interdum et malesuada fames ac ante ipsum
                    </p>
                </div>

                <Button variant="outline">Hotel ▼</Button>
            </div>

            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                {recommendedData.map((item, index) => (
                    <RecommendedCard key={index} {...item} />
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-6">
                <ChevronLeft className="h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-800" />
                <div className="flex gap-2">
                    <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                </div>
                <ChevronRight className="h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-800" />
            </div>
        </section>
    );
};

export default RecommendedSection;
