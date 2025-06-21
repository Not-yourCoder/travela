import { Button } from "@/components/ui/button";

type Props = {
    image: string;
    title: string;
};

const DestinationCard = ({ image, title }: Props) => (
    <div className="relative rounded-sm overflow-hidden shadow group cursor-pointer ">
        {/* Image */}
        <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore {title}
            </Button>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 w-full p-4 bg-transparent text-white">
            <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
    </div>
);

export default DestinationCard;
