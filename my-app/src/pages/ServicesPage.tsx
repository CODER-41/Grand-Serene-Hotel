/**
 * 📁 src/pages/Services.tsx
 * Purpose: Services page showcasing rooms, dining, wellness, and more
 * Depends on: PublicLayout, framer-motion, publicData
 * Used by: App.tsx routing
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bed, UtensilsCrossed, Sparkles, PartyPopper, MapPin,
  Clock, Wine, ChefHat, Leaf, Waves, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PublicLayout from '@/components/public/PublicLayout';
import { services, diningOptions } from '@/data/publicData';
import { mockRooms } from '@/data/mockData';
import serviceSuite from '@/assets/service-suite.jpg';
import serviceDining from '@/assets/service-dining.jpg';
import serviceSpa from '@/assets/service-spa.jpg';
import serviceEvents from '@/assets/service-events.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomPresidential from '@/assets/room-presidential.jpg';
import diningBar from '@/assets/dining-bar.jpg';

const categoryIcons = {
  accommodation: Bed,
  dining: UtensilsCrossed,
  wellness: Sparkles,
  events: PartyPopper,
  experiences: MapPin,
};

// Map room types to unique images
const roomImages: Record<string, string> = {
  'Standard': roomStandard,
  'Deluxe': roomDeluxe,
  'Suite': serviceSuite,
  'Presidential': roomPresidential,
};

// Map dining options to unique images (alternating)
const diningImages = [serviceDining, diningBar, serviceDining, diningBar];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const roomTypes = [
    { type: 'Standard', price: 'From $450', features: ['Garden View', '45 sqm', 'King Bed'] },
    { type: 'Deluxe', price: 'From $650', features: ['Ocean View', '60 sqm', 'King Bed', 'Balcony'] },
    { type: 'Suite', price: 'From $1,200', features: ['Panoramic View', '90 sqm', 'Living Area', 'Butler Service'] },
    { type: 'Presidential', price: 'From $3,500', features: ['Private Terrace', '180 sqm', 'Private Pool', 'Dedicated Staff'] },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-4 mb-6"
            >
              Exceptional Experiences<br />
              <span className="text-accent">Await You</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              From world-class accommodations to exquisite dining, every service 
              at The Grand Serene is designed to create unforgettable moments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = categoryIcons[service.category];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-lg shadow-soft hover:shadow-luxury transition-shadow duration-500 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <span 
                        key={feature} 
                        className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  {service.priceRange && (
                    <p className="text-accent font-medium text-sm">{service.priceRange}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Accommodations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4"
            >
              Luxury Rooms & Suites
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={roomImages[room.type]} 
                    alt={room.type} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{room.type}</h3>
                  <p className="text-accent font-medium text-sm mb-4">{room.price}</p>
                  <ul className="space-y-1">
                    {room.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground text-sm flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/rooms">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Culinary Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4"
            >
              Dining Experiences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto mt-4"
            >
              From intimate fine dining to casual elegance, our restaurants and bars 
              offer a world of flavors crafted by award-winning chefs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {diningOptions.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-card p-6 rounded-lg shadow-soft hover:shadow-luxury transition-shadow duration-500"
              >
                <div className="md:w-1/3 aspect-square rounded-lg flex-shrink-0 overflow-hidden">
                  <img 
                    src={diningImages[index % diningImages.length]} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold">{restaurant.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      restaurant.priceRange === 'fine-dining' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {restaurant.priceRange === 'fine-dining' ? '$$$$' : '$$$'}
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">{restaurant.cuisine}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {restaurant.description}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock size={14} />
                    <span>{restaurant.openingHours}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {restaurant.features.slice(0, 3).map((feature) => (
                      <span 
                        key={feature} 
                        className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-24 bg-sage-light/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sage font-body text-sm uppercase tracking-[0.3em]">
                Wellness & Spa
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
                Serenity Spa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Embark on a journey of renewal at our world-renowned spa, where ancient 
                healing traditions meet modern wellness science. Our expert therapists 
                create personalized experiences to restore balance to body, mind, and spirit.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Waves, label: 'Thermal Pools' },
                  { icon: Leaf, label: 'Organic Treatments' },
                  { icon: Sparkles, label: 'Signature Massages' },
                  { icon: Star, label: 'Private Suites' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                      <item.icon size={18} className="text-sage" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-sage hover:bg-sage/90 text-white">
                  Book Spa Treatment
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-luxury">
                <img 
                  src={serviceSpa} 
                  alt="Serenity Spa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-luxury">
                <img 
                  src={serviceEvents} 
                  alt="Grand Ballroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-body text-sm uppercase tracking-[0.3em]">
                Events & Celebrations
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
                Grand Ballroom
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Host unforgettable events in our magnificent Grand Ballroom. From intimate 
                gatherings to lavish galas, our dedicated events team ensures every detail 
                is executed to perfection, creating memories that last a lifetime.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: PartyPopper, label: 'Weddings' },
                  { icon: Star, label: 'Gala Events' },
                  { icon: UtensilsCrossed, label: 'Corporate Dinners' },
                  { icon: Wine, label: 'Private Parties' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Plan Your Event
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Contact our team to plan your perfect stay or inquire about 
            any of our exclusive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bookings">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Make a Reservation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Contact Concierge
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Services;