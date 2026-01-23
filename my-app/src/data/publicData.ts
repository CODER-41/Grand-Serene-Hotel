/**
 * 📁 src/data/publicData.ts
 * Purpose: Mock data for public-facing hotel website
 * Depends on: hotel.types.ts
 * Used by: Landing, About, Services, Contact pages
 */

import { Service, DiningOption, Testimonial, ContactInfo } from '@/types/hotel.types';

export const hotelInfo = {
  name: 'The Grand Serene',
  tagline: 'Where Luxury Meets Tranquility',
  description: 'Nestled in the heart of pristine natural beauty, The Grand Serene offers an unparalleled escape where timeless elegance meets modern comfort. Our sanctuary provides a seamless blend of world-class hospitality, exquisite dining, and rejuvenating wellness experiences.',
  founded: 1985,
  awards: [
    'Five-Star Diamond Award 2024',
    'Best Luxury Hotel - Travel & Leisure',
    'Condé Nast Gold List 2024',
    'Forbes Travel Guide Five-Star Rating'
  ]
};

export const services: Service[] = [
  {
    id: 'srv-1',
    name: 'Luxury Accommodations',
    description: 'From elegant suites to the breathtaking Presidential Penthouse, each room is a sanctuary of comfort designed with meticulous attention to detail.',
    category: 'accommodation',
    features: ['Ocean or Garden Views', 'Marble Bathrooms', '24/7 Concierge', 'Premium Linens'],
    priceRange: 'From $450/night'
  },
  {
    id: 'srv-2',
    name: 'Fine Dining',
    description: 'Embark on a culinary journey through our award-winning restaurants, where world-renowned chefs craft unforgettable gastronomic experiences.',
    category: 'dining',
    features: ['Farm-to-Table Cuisine', 'Sommelier Service', 'Private Dining', 'Dietary Accommodations'],
    priceRange: 'À la carte'
  },
  {
    id: 'srv-3',
    name: 'Serenity Spa & Wellness',
    description: 'Restore your body and mind at our holistic wellness center featuring ancient healing traditions and cutting-edge treatments.',
    category: 'wellness',
    features: ['Signature Massages', 'Thermal Suites', 'Yoga & Meditation', 'Beauty Treatments'],
    priceRange: 'From $180'
  },
  {
    id: 'srv-4',
    name: 'Events & Celebrations',
    description: 'Create unforgettable moments in our stunning event spaces, perfect for weddings, corporate retreats, and milestone celebrations.',
    category: 'events',
    features: ['Grand Ballroom', 'Garden Terrace', 'Event Planning', 'Bespoke Catering'],
    priceRange: 'Custom Quote'
  },
  {
    id: 'srv-5',
    name: 'Curated Experiences',
    description: 'Discover handcrafted adventures and cultural immersions designed to create lasting memories during your stay.',
    category: 'experiences',
    features: ['Private Tours', 'Helicopter Excursions', 'Cooking Classes', 'Wine Tastings'],
    priceRange: 'From $250'
  }
];

export const diningOptions: DiningOption[] = [
  {
    id: 'din-1',
    name: 'Aurum',
    cuisine: 'Contemporary French',
    description: 'Our flagship restaurant offers a refined dining experience with seasonal menus crafted by Executive Chef Marcus Laurent.',
    openingHours: 'Dinner: 6:00 PM - 10:30 PM',
    priceRange: 'fine-dining',
    features: ['Tasting Menus', 'Wine Pairing', 'Private Rooms', 'Chef\'s Table']
  },
  {
    id: 'din-2',
    name: 'Sakura Garden',
    cuisine: 'Japanese Omakase',
    description: 'An intimate omakase experience featuring the freshest seafood flown in daily from Tokyo\'s Tsukiji market.',
    openingHours: 'Dinner: 5:30 PM - 10:00 PM',
    priceRange: 'fine-dining',
    features: ['Omakase Counter', 'Sake Selection', 'Private Tatami Rooms']
  },
  {
    id: 'din-3',
    name: 'The Terrace',
    cuisine: 'Mediterranean',
    description: 'Al fresco dining with panoramic views, featuring wood-fired dishes and an extensive selection of Mediterranean wines.',
    openingHours: 'Lunch & Dinner: 12:00 PM - 10:00 PM',
    priceRange: 'moderate',
    features: ['Outdoor Seating', 'Wood-Fired Oven', 'Sunset Views']
  },
  {
    id: 'din-4',
    name: 'The Conservatory',
    cuisine: 'All-Day Dining',
    description: 'A bright, airy space serving international breakfast, light lunches, and traditional afternoon tea.',
    openingHours: '7:00 AM - 6:00 PM',
    priceRange: 'moderate',
    features: ['Breakfast Buffet', 'Afternoon Tea', 'Garden Views']
  },
  {
    id: 'din-5',
    name: 'Velvet Lounge',
    cuisine: 'Cocktails & Small Plates',
    description: 'An elegant bar offering craft cocktails, premium spirits, and carefully curated small plates in an intimate setting.',
    openingHours: '5:00 PM - 1:00 AM',
    priceRange: 'moderate',
    features: ['Craft Cocktails', 'Live Jazz', 'Cigar Terrace']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    guestName: 'Elizabeth Monroe',
    location: 'New York, USA',
    rating: 5,
    comment: 'An absolutely transformative experience. From the moment we arrived, every detail was perfect. The staff anticipated our every need, and the spa treatments were divine.',
    date: new Date('2024-11-15')
  },
  {
    id: 'test-2',
    guestName: 'James & Victoria Chen',
    location: 'Singapore',
    rating: 5,
    comment: 'We chose The Grand Serene for our anniversary and it exceeded all expectations. The Presidential Suite was stunning, and Aurum provided the most memorable dinner of our lives.',
    date: new Date('2024-10-28')
  },
  {
    id: 'test-3',
    guestName: 'Alessandro Rossi',
    location: 'Milan, Italy',
    rating: 5,
    comment: 'As someone who travels extensively for business, I can confidently say this is among the finest hotels in the world. The attention to detail is unmatched.',
    date: new Date('2024-12-02')
  },
  {
    id: 'test-4',
    guestName: 'Dr. Priya Sharma',
    location: 'London, UK',
    rating: 5,
    comment: 'The perfect blend of luxury and tranquility. I came for a wellness retreat and left feeling completely renewed. The staff are genuinely warm and professional.',
    date: new Date('2024-09-20')
  }
];

export const contactInfo: ContactInfo = {
  address: '1 Serenity Bay Drive',
  city: 'Coastal Haven',
  country: 'United States',
  phone: '+1 (888) 555-GRAND',
  email: 'reservations@grandserene.com',
  coordinates: {
    lat: 25.7617,
    lng: -80.1918
  }
};

export const teamMembers = [
  {
    name: 'Margaret Ashworth',
    role: 'General Manager',
    bio: 'With over 25 years in luxury hospitality, Margaret brings her vision of personalized excellence to every guest experience.'
  },
  {
    name: 'Chef Marcus Laurent',
    role: 'Executive Chef',
    bio: 'A Michelin-starred chef trained in Paris, Marcus creates culinary masterpieces that celebrate local ingredients and global techniques.'
  },
  {
    name: 'Dr. Elena Voss',
    role: 'Wellness Director',
    bio: 'A holistic health expert, Dr. Voss designs transformative wellness programs combining Eastern and Western healing traditions.'
  },
  {
    name: 'Thomas Beaumont',
    role: 'Head Sommelier',
    bio: 'An award-winning sommelier with an encyclopedic knowledge of wines, Thomas curates our exceptional cellar collection.'
  }
];
