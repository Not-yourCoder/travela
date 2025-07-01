import { TravelSlider } from './TravelSlider'


const TravelSection = () => {
    return (
        <div className="lg:container mx-4 lg:mx-auto py-12 space-y-8 ">
            <h2 className="text-lg lg:text-3xl font-bold mb-4">Featured Travel Articles</h2>
            <TravelSlider />
        </div>
    )
}

export default TravelSection