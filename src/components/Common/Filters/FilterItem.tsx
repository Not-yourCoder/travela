/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "@/components/ui/checkbox";

export const FilterItem = ({ label, count, checked, onCheckedChange } : any) => (
    <div className="flex items-center justify-between py-1">
        <div className="flex items-center space-x-2">
            <Checkbox
                id={label}
                checked={checked}
                onCheckedChange={onCheckedChange}
            />
            <label htmlFor={label} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </label>
        </div>
        <span className="text-xs text-gray-500">{count}</span>
    </div>
);