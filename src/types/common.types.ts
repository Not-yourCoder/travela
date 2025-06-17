export interface RecommendedHotel {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  badgeText?: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  review: string;
}
  
export interface TestimonialStats {
  happyPeople: string;
  overallRating: number;
}
  