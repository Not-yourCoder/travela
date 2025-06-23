import { Star } from 'lucide-react';

type Props = {
    rating: number
}

const StarRating = ({ rating }: Props) => {
    return Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`w-3 h-3 ${i < rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`}
        />
    ));
}

export default StarRating