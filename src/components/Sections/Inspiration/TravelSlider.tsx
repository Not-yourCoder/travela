import { CommonSlider } from "@/components/Common/Slider"
import { TravelCard } from "./TravelCard"

const travelArticles = [
    {
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "10 European ski destinations you should visit this winter",
        date: "April 06, 2022",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Booking travel during Corona: good advice in an uncertain time",
        date: "April 06, 2022",
    },
    {
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Where can I go? 5 amazing countries that are open right now",
        date: "April 06, 2022",
    },
    {
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "10 European ski destinations you should visit this winter",
        date: "April 06, 2022",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Booking travel during Corona: good advice in an uncertain time",
        date: "April 06, 2022",
    },
    {
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Where can I go? 5 amazing countries that are open right now",
        date: "April 06, 2022",
    },
]

export const TravelSlider = () => {
    return (
        <CommonSlider>
            {travelArticles.map((article, idx) => (
                <TravelCard
                    key={idx}
                    image={article.image}
                    title={article.title}
                    date={article.date}
                />
            ))}
        </CommonSlider>
    )
}
