import DestinationSection from '@/components/DestinationSection'
import HeroSearch from '@/components/Hero'
import RecommendedSection from '@/components/RecommendationSection'
import TestimonialSection from '@/components/Sections/Testimonial'


const Home = () => {
    return (
        <>
            <HeroSearch />
            <DestinationSection />
            <RecommendedSection />
            <TestimonialSection/>
        </>
    )
}

export default Home