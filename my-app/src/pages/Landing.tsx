/**
 * 📁 src/pages/Landing.tsx
 * Purpose: Public-facing landing/home page for the hotel
 * Depends on: PublicLayout, framer-motion, publicData
 * Used by: App.tsx routing
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PublicLayout from '@/components/public/PublicLayout';
import { hotelInfo, services, testimonials } from '@/data/publicData';
import heroLobby from '@/assets/hero-lobby-2.jpg';
import serviceDining from '@/assets/service-dining.jpg';
import serviceSuite from '@/assets/service-suite.jpg';
import serviceSpa from '@/assets/service-spa.jpg';
import serviceEvents from '@/assets/service-events.jpg';

const Landing = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroLobby}
            alt="Grand Serene Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/70 to-sage-light/40" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-white font-body text-sm uppercase tracking-[0.3em] drop-shadow-lg">
                Luxury Redefined
              </span>
              <Sparkles size={16} className="text-accent" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -5, 0, -3, 0],
                scale: [1, 1.02, 1, 1.01, 1]
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight drop-shadow-2xl"
            >
              Where Luxury
              <br />
              <span className="text-white drop-shadow-lg">Meets Tranquility</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-body leading-relaxed drop-shadow-md"
            >
              Experience unparalleled elegance at The Grand Serene. A sanctuary of
              refined comfort where every moment is crafted for your pleasure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/bookings">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body uppercase tracking-wider text-sm px-8 py-6 shadow-xl">
                  Reserve Your Stay
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body uppercase tracking-wider text-sm px-8 py-6 backdrop-blur-sm shadow-xl">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Awards Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-16 border-t border-white/20"
            >
              {hotelInfo.awards.slice(0, 3).map((award, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <Award size={16} className="text-accent" />
                  <span className="text-xs uppercase tracking-wider drop-shadow-sm">{award}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              The Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4"
            >
              Curated Excellence
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Concierge', desc: 'Dedicated service around the clock to fulfill your every request' },
              { icon: Sparkles, title: 'Bespoke Experiences', desc: 'Personalized itineraries crafted exclusively for you' },
              { icon: Users, title: 'World-Class Staff', desc: 'Trained at the finest hospitality schools worldwide' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg shadow-soft text-center group hover:shadow-luxury transition-shadow duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Content */}
            <div className="lg:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-body text-sm uppercase tracking-[0.3em]"
              >
                Our Services
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6"
              >
                Indulge in<br />Exceptional Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                From our award-winning restaurants to our rejuvenating spa treatments, 
                every aspect of The Grand Serene is designed to exceed expectations 
                and create lasting memories.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-8"
              >
                {services.slice(0, 4).map((service) => (
                  <div key={service.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-body">{service.name}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/services">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View All Services
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Visual Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={serviceDining}
                  alt="Fine Dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display text-lg font-semibold drop-shadow-lg">Fine Dining</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[3/4] mt-8 rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={serviceSpa}
                  alt="Wellness"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display text-lg font-semibold drop-shadow-lg">Wellness</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[3/4] -mt-8 rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={serviceSuite}
                  alt="Suites"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display text-lg font-semibold drop-shadow-lg">Suites</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={serviceEvents}
                  alt="Events"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display text-lg font-semibold drop-shadow-lg">Events</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em]">
              Guest Experiences
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
              Words of Praise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 italic leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-display font-semibold">{testimonial.guestName}</p>
                  <p className="text-primary-foreground/60 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-sage/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            Begin Your Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto mb-8"
          >
            Let us create an unforgettable experience tailored just for you. 
            Contact our reservations team to plan your stay.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Contact Us
              </Button>
            </Link>
            <Link to="/bookings">
              <Button size="lg" variant="outline" className="border-foreground/20 px-8">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Landing;
