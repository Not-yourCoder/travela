import DestinationSection from '@/components/Sections/DestinationSection'
import HeroSearch from '@/components/Hero'
import TestimonialSection from '@/components/Sections/Testimonial'
import RecommendedSection from '@/components/Sections/RecommendationSection'
import TravelSection from '@/components/Sections/Inspiration'


const Home = () => {
    return (
        <>
            <HeroSearch />
            <DestinationSection />
            <RecommendedSection />
            <TestimonialSection />
            <TravelSection />
        </>
    )
}

export default Home