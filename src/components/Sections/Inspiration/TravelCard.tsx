type TravelCardProps = {
    image: string
    title: string
    date: string
}

export const TravelCard = ({ image, title, date }: TravelCardProps) => {
    return (
        <div className="keen-slider__slide flex flex-col gap-2 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] ">
            <img
                src={image}
                alt={title}
                className="h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
    )
}
  