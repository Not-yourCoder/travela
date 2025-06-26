import InformationCard from "../Cards/InformationCard";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const DateSelection = () => (
    <InformationCard>
        <h3 className="font-semibold mb-4">Change Dates and Guest(s)</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <label className="block text-sm mb-1">Check-in: 2 PM</label>
                <Select>
                    <SelectTrigger className="bg-gray-50 border-gray-600 rounded-md">
                        <SelectValue placeholder="Tue, 1 Jul 2025" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="tue1jul">Tue, 1 Jul 2025</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm mb-1">Check-out: 12 PM</label>
                <Select>
                    <SelectTrigger className="bg-gray-50 border-gray-400 rounded-md">
                        <SelectValue placeholder="Wed, 2 Jul 2025" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="wed2jul">Wed, 2 Jul 2025</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm mb-1">Guests</label>
                <Select>
                    <SelectTrigger className="bg-gray-50 border-gray-600 rounded-md">
                        <SelectValue placeholder="2 Adults" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2adults">2 Adults</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 self-end">
                UPDATE SEARCH
            </Button>
        </div>
    </InformationCard>
);