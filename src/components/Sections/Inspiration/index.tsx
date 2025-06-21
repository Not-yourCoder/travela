import { TravelSlider } from './TravelSlider'


const TravelSection = () => {
    return (
        <div className="container mx-auto py-12 space-y-8 ">
            <h2 className="text-2xl font-bold mb-4">Featured Travel Articles</h2>
            <TravelSlider />
        </div>
    )
}

export default TravelSection