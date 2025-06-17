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
