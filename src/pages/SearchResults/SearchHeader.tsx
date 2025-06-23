import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const SearchHeader = () => {
    return (
        <div className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Button>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Client Trip to Delhi</span>
                            <span className="text-gray-400">›</span>
                            <span className="text-orange-500 font-medium">Hotel Search</span>
                        </div>
                        <div className="text-sm text-gray-500">Trip ID #80537</div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <div className="font-medium">New Delhi, India</div>
                        <div className="text-sm text-gray-500">Sat 04th Jun, 2020 - Wed 08th Jul 2020 | 2 Travellers</div>
                    </div>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                        Modify
                    </Button>
                    <Avatar>
                        <AvatarFallback className="bg-orange-500 text-white font-bold">HT</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
};
