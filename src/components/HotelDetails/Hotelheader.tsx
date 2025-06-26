import { Star } from "lucide-react";

export const HotelHeader = () => (
    <div className="bg-gray-50 text-slate-900 p-4 md:p-6 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">The Oberoi, Bengaluru</h1>
                <div className="flex items-center gap-2 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-slate-800 mt-1">A Luxury Hotel on MG Road near Offices and Malls</p>
            </div>
            <div className="text-right">
                <div className="text-sm text-slate-800">Per Night:</div>
                <div className="text-2xl md:text-3xl font-bold">₹ 17,000</div>
                <div className="text-sm text-slate-800">+ ₹ 3,060 taxes & fees</div>
            </div>
        </div>
    </div>
);