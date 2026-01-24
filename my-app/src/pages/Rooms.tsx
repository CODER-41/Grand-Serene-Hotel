/**
 * 📁 src/pages/Rooms.tsx
 * Purpose: Public rooms page showcasing hotel accommodations
 * Depends on: PublicLayout, framer-motion, publicData
 * Used by: App.tsx routing
 */

import { motion } from 'framer-motion';
import { Bed, Users, Square, Star, Wifi, Coffee, Bath, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PublicLayout from '@/components/public/PublicLayout';
import heroLobby from '@/assets/hero-lobby.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomPresidential from '@/assets/room-presidential.jpg';
import serviceSuite from '@/assets/service-suite.jpg';

const roomTypes = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 'From $450/night',
    image: roomStandard,
    size: '45 sqm',
    occupancy: '2 guests',
    bed: 'King Bed',
    view: 'Garden View',
    features: ['Free WiFi', 'Coffee Maker', 'Private Bathroom', 'Room Service'],
    description: 'Comfortable and elegantly appointed rooms perfect for business travelers and short stays.',
    amenities: [
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: Coffee, label: 'Coffee & Tea' },
      { icon: Bath, label: 'Marble Bathroom' },
      { icon: Car, label: 'Valet Parking' },
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 'From $650/night',
    image: roomDeluxe,
    size: '60 sqm',
    occupancy: '2 guests',
    bed: 'King Bed',
    view: 'Ocean View',
    features: ['Free WiFi', 'Mini Bar', 'Balcony', 'Premium Amenities'],
    description: 'Spacious rooms with stunning ocean views and premium amenities for a luxurious stay.',
    amenities: [
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: Users, label: 'Ocean View' },
      { icon: Square, label: 'Spacious Balcony' },
      { icon: Star, label: 'Premium Amenities' },
    ],
  },
  {
    id: 'suite',
    name: 'Executive Suite',
    price: 'From $1,200/night',
    image: serviceSuite,
    size: '90 sqm',
    occupancy: '4 guests',
    bed: 'King Bed + Sofa Bed',
    view: 'Panoramic View',
    features: ['Living Area', 'Butler Service', 'Dining Area', 'Premium Amenities'],
    description: 'Luxurious suites with separate living areas, perfect for extended stays or special occasions.',
    amenities: [
      { icon: Square, label: 'Separate Living Area' },
      { icon: Users, label: 'Butler Service' },
      { icon: Bed, label: 'Dining Area' },
      { icon: Star, label: 'Premium Service' },
    ],
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 'From $3,500/night',
    image: roomPresidential,
    size: '180 sqm',
    occupancy: '6 guests',
    bed: 'Master King + Guest Beds',
    view: 'Private Terrace',
    features: ['Private Pool', 'Dedicated Staff', 'Private Terrace', 'Exclusive Access'],
    description: 'The ultimate in luxury with private pool, terrace, and dedicated concierge service.',
    amenities: [
      { icon: Square, label: 'Private Pool' },
      { icon: Users, label: 'Dedicated Staff' },
      { icon: Bed, label: 'Private Terrace' },
      { icon: Star, label: 'Exclusive Access' },
    ],
  },
];

const Rooms = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroLobby}
            alt="Grand Serene Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background/90" />
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Our Accommodations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mt-4 mb-6"
            >
              Luxury Rooms &<br />
              <span className="text-accent">Suites</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90 leading-relaxed"
            >
              Experience unparalleled comfort and elegance in our meticulously designed rooms.
              Each space combines classic sophistication with modern luxury for an unforgettable stay.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Room Types Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-luxury">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg -z-10" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {room.price}
                  </Badge>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                      {room.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Square size={16} className="text-accent" />
                      <span className="text-sm text-muted-foreground">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-accent" />
                      <span className="text-sm text-muted-foreground">{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-accent" />
                      <span className="text-sm text-muted-foreground">{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-accent" />
                      <span className="text-sm text-muted-foreground">{room.view}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity) => (
                      <div key={amenity.label} className="flex items-center gap-2">
                        <amenity.icon size={16} className="text-accent" />
                        <span className="text-sm text-muted-foreground">{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Contact our reservations team or book directly online to secure your perfect room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Make a Reservation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Rooms;
