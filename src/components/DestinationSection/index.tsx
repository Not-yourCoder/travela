import SectionHeading from './SectionHeading'
import DestinationsCarousel from './DestinationCarousel'
import { useNavigate } from '@tanstack/react-router'


const DestinationSection = () => {
    const navigate = useNavigate()
    return (
        <div className=" py-16 pl-16 bg-red-600">
            <SectionHeading
                title="Popular Destinations"
                subtitle="These popular destinations have a lot to offer"
                actionLabel="View All Destinations"
                onAction={() => navigate({ href: "/destination" })}
            />

            <DestinationsCarousel />
        </div>
    )
}

export default DestinationSection