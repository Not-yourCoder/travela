import { MapPin, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HotelHeader } from '@/components/HotelDetails/Hotelheader';
import { ImageGallery } from '@/components/HotelDetails/ImageGallery';
import { BookingCard } from '@/components/Cards/HotelBooking';
import { DateSelection } from '@/components/DateSelection';
import { AmenitiesSection } from '@/components/HotelDetails/Amenities';
import { ReviewsSection } from '@/components/Reviews';
import { LoginSection } from '@/components/Auth/Login';
import { RatingSection } from '@/components/Rating';
import InformationCard from '@/components/Cards/InformationCard';
const HotelBookingUI = () => {
    return (
        <div className="min-h-screen bg-gray-50 mt-22">
            <HotelHeader />

            <div className="container mx-auto px-4 py-6 space-y-6">
                <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4'>
                    <ImageGallery />
                    <BookingCard />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <InformationCard>
                            <p className="text-sm">
                                Nestled in green lawns and equipped with technology, The Oberoi is a premium, award-winning property offering curated experiences.
                                <Button variant="link" className="text-blue-400 p-0 h-auto ml-1">More</Button>
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <Button variant="outline" size="sm" className="text-slate-800 border-gray-300">
                                    <Utensils className="w-4 h-4 mr-2" />
                                    Food and Dining
                                </Button>
                                <Button variant="outline" size="sm" className="text-slate-800  border-gray-300">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Location & Surroundings
                                </Button>
                            </div>
                        </InformationCard>

                        <DateSelection />
                        <AmenitiesSection />
                        {/* <ExperienceCards /> */}
                        <ReviewsSection />
                        <LoginSection />
                    </div>

                    <div className="space-y-6">
                        <RatingSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBookingUI;