import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    subtitle?: string;
    actionLabel?: string;
    onAction?: () => void;
};

const SectionHeading = ({ title, subtitle, actionLabel, onAction }: Props) => (
    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {actionLabel && (
            <Button variant="outline" onClick={onAction}>
                {actionLabel}
                <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
        )}
    </div>
);

export default SectionHeading;
