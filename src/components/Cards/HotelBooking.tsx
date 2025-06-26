import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const BookingCard = () => (
    <Card className="bg-gray-50 text-slate-800 border-gray-300 shadow-sm col-span-1">
        <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Deluxe Room with Private Balcony</h3>
            <p className="text-sm text-gray-300 mb-2">Fits 2 Adults</p>

            <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Book with ₹0 Payment</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>No meals included</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-400">MMT'S Best Available Rate</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Free Cancellation before 29 Jan 01:59 PM</span>
                </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">
                BOOK THIS NOW
            </Button>

            <Button variant="outline" className="w-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                5 More Options
            </Button>
        </CardContent>
    </Card>
);