import {
  Apple,
  Facebook,
  Instagram,
  Linkedin,
  PlayCircle,
  Twitter,
} from "lucide-react";
import type { NavigationMenu } from "./types/navigation.types";
import type { FooterData } from "./types/footer.types";
import type {
  RecommendedHotel,
  Testimonial,
  TestimonialStats,
} from "./types/common.types";

export const navigationMenu: NavigationMenu[] = [
  {
    path: "/",
    label: "Home",
    id: "home",
  },
  {
    path: "/aboutUs",
    label: "About",
    id: "about",
  },
  {
    label: "Categories",
    id: "categories",
    isDropdown: true,
  },
  {
    path: "/destinations",
    label: "Destinations",
    id: "destinations",
  },
  {
    path: "/contactUs",
    label: "Contact Us",
    id: "contactUs",
  },
];

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const FOOTER_DATA: FooterData = {
  newsletter: {
    title: "Your Travel Journey Starts Here",
    subtitle: "Sign up and we'll send the best deals to you",
    emailPlaceholder: "Your Email",
    buttonText: "Subscribe",
  },

  contact: {
    title: "Contact Us",
    phone: {
      label: "Toll Free Customer Care",
      number: "+(1) 123 456 7890",
    },
    support: {
      label: "Need live support?",
      email: "hi@gotrip.com",
    },
  },

  company: {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Press", href: "#" },
      { text: "Gift Cards", href: "#" },
      { text: "Magazine", href: "#" },
    ],
  },

  support: {
    title: "Support",
    links: [
      { text: "Contact", href: "#" },
      { text: "Legal Notice", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms and Conditions", href: "#" },
      { text: "Sitemap", href: "#" },
    ],
  },

  services: {
    title: "Other Services",
    links: [
      { text: "Car hire", href: "#" },
      { text: "Activity Finder", href: "#" },
      { text: "Tour List", href: "#" },
      { text: "Flight finder", href: "#" },
      { text: "Cruise Ticket", href: "#" },
      { text: "Holiday Rental", href: "#" },
      { text: "Travel Agents", href: "#" },
    ],
  },

  mobile: {
    title: "Mobile",
    apps: [
      {
        platform: "iOS",
        text: "Download on the Apple Store",
        icon: Apple,
        href: "#",
      },
      {
        platform: "Android",
        text: "Get it on Google Play",
        icon: PlayCircle,
        href: "#",
      },
    ],
  },

  vendorLinks: [
    { text: "Vendor dashboard", href: "#" },
    { text: "Vendor hotels", href: "#" },
    { text: "Vendor recovery", href: "#" },
  ],

  footer: {
    copyright: "© 2022 GoTrip LLC All rights reserved.",
    legalLinks: [
      { text: "Privacy", href: "#" },
      { text: "Terms", href: "#" },
      { text: "Site Map", href: "#" },
    ],
    language: "English (US)",
    currency: "USD",
    socialLinks: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  },
};

export const heroTabItems: string[] = [
  "Hotel",
  "Tour",
  "Activity",
  "Holiday Rentals",
  "Car",
  "Cruise",
  "Flights",
];

export const recommendedData: RecommendedHotel[] = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    rating: 4.8,
    reviews: 3014,
    price: "US$72",
    badgeText: "BREAKFAST INCLUDED",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Staycity Aparthotels Deptford Bridge Station",
    location: "Ciutat Vella, Barcelona",
    rating: 4.8,
    reviews: 3014,
    price: "US$72",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    rating: 4.8,
    reviews: 3014,
    price: "US$72",
    badgeText: "BREAKFAST INCLUDED",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Westin New York at Times Square",
    location: "Manhattan, New York",
    rating: 4.8,
    reviews: 3014,
    price: "US$72",
    badgeText: "BEST SELLER",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Westin New York at Times Square",
    location: "Manhattan, New York",
    rating: 4.8,
    reviews: 3014,
    price: "US$72",
    badgeText: "BEST SELLER",
  },
];

export const testimonials: Testimonial[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    name: "Annette Black",
    role: "UX / UI Designer",
    review:
      "The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.",
  },
];

export const testimonialStats: TestimonialStats = {
  happyPeople: "13M+",
  overallRating: 4.88,
};


export const hotelsData = [
  {
    id: 1,
    name: "The Grand New Delhi",
    rating: 4,
    location: "Vasant Kunj",
    distance: "12.5 km from Indira Gandhi International Airport",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
    originalPrice: 96000,
    price: 90000,
    payAtHotel: true,
    corporateFare: false,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: true,
    },
  },
  {
    id: 2,
    name: "The Leela Palace New Delhi",
    rating: 5,
    location: "Safdarjung, New Delhi",
    distance: "2.7 km from Lodhi Archaeological Park",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 85000,
    price: 75108,
    payAtHotel: false,
    corporateFare: true,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
  {
    id: 3,
    name: "Villa Serenity New Delhi",
    rating: 4,
    location: "Safdarjung, New Delhi",
    distance: "2.8 km from Hazrat Nizamuddin Station",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 74680,
    price: 71000,
    payAtHotel: true,
    corporateFare: true,
    specialOffer: "Govt rate starting at ₹ 68000",
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
  {
    id: 1,
    name: "The Grand New Delhi",
    rating: 4,
    location: "Vasant Kunj",
    distance: "12.5 km from Indira Gandhi International Airport",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
    originalPrice: 96000,
    price: 90000,
    payAtHotel: true,
    corporateFare: false,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: true,
    },
  },
  {
    id: 2,
    name: "The Leela Palace New Delhi",
    rating: 5,
    location: "Safdarjung, New Delhi",
    distance: "2.7 km from Lodhi Archaeological Park",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 85000,
    price: 75108,
    payAtHotel: false,
    corporateFare: true,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
  {
    id: 3,
    name: "Villa Serenity New Delhi",
    rating: 4,
    location: "Safdarjung, New Delhi",
    distance: "2.8 km from Hazrat Nizamuddin Station",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 74680,
    price: 71000,
    payAtHotel: true,
    corporateFare: true,
    specialOffer: "Govt rate starting at ₹ 68000",
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
  {
    id: 1,
    name: "The Grand New Delhi",
    rating: 4,
    location: "Vasant Kunj",
    distance: "12.5 km from Indira Gandhi International Airport",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
    originalPrice: 96000,
    price: 90000,
    payAtHotel: true,
    corporateFare: false,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: true,
    },
  },
  {
    id: 2,
    name: "The Leela Palace New Delhi",
    rating: 5,
    location: "Safdarjung, New Delhi",
    distance: "2.7 km from Lodhi Archaeological Park",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 85000,
    price: 75108,
    payAtHotel: false,
    corporateFare: true,
    specialOffer: null,
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
  {
    id: 3,
    name: "Villa Serenity New Delhi",
    rating: 4,
    location: "Safdarjung, New Delhi",
    distance: "2.8 km from Hazrat Nizamuddin Station",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: 74680,
    price: 71000,
    payAtHotel: true,
    corporateFare: true,
    specialOffer: "Govt rate starting at ₹ 68000",
    amenities: {
      freeWifi: true,
      freeBreakfast: true,
      freeCancellation: false,
    },
  },
];