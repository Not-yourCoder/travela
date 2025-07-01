import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    subtitle?: string;
    actionLabel?: string;
    onAction?: () => void;
};

const SectionHeading = ({ title, subtitle, actionLabel, onAction }: Props) => (
    <div className="flex justify-between items-center mb-4 lg:mb-6">
        <div>
            <h2 className="text-xl lg:text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground text-sm lg:text-lg mt-1">{subtitle}</p>}
        </div>
        {actionLabel && (
            <Button variant="outline" onClick={onAction} className="hidden lg:block">
                {actionLabel}
                <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
        )}
    </div>
);

export default SectionHeading;
