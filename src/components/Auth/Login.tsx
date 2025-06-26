import InformationCard from "../Cards/InformationCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const LoginSection = () => (
    <InformationCard>
        <h3 className="font-semibold mb-4">Login to unlock deals & manage your bookings!</h3>
        <div className="flex gap-2">
            <div className="flex items-center bg-gray-50 rounded-sm border-gray-300/50 border-2  px-3">
                <span className="text-sm">Mobile Number</span>
                <span className="ml-2 text-sm">+91</span>
            </div>
            <Input
                className="flex-1 bg-gray-50 border-gray-300/50 border-2 rounded-sm text-gray-800"
                placeholder="Enter mobile number"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
                LOGIN NOW
            </Button>
        </div>
    </InformationCard>
);
