import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const RatingSection = () => (
    <Card className="bg-gray-50 text-slate-800 border-gray-200 shadow-sm">
        <CardContent className="p-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-lg font-bold">
                    4.7
                </div>
                <div>
                    <div className="font-semibold">Excellent</div>
                    <div className="text-sm text-slate-700">(2177 ratings)</div>
                </div>
                <Button variant="outline" className="ml-auto text-blue-400 border-blue-400">
                    All Reviews
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <div>
                    <div className="font-semibold">Ulsoor</div>
                    <div className="text-sm text-slate-800">2 minutes walk to Trinity Metro Station</div>
                </div>
                <Button variant="link" className="text-blue-400 p-0 h-auto">
                    See on Map
                </Button>
            </div>
        </CardContent>
    </Card>
);