/**
 * 📁 src/pages/About.tsx
 * Purpose: About page for the hotel
 * Depends on: PublicLayout, framer-motion, publicData
 * Used by: App.tsx routing
 */

import { motion } from 'framer-motion';
import { Award, Heart, Globe, Leaf } from 'lucide-react';
import PublicLayout from '@/components/public/PublicLayout';
import { hotelInfo, teamMembers } from '@/data/publicData';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Genuine Hospitality',
      description: 'Every guest is treated as family, with personalized care and attention to every detail.'
    },
    {
      icon: Award,
      title: 'Uncompromising Excellence',
      description: 'We set the standard for luxury, constantly evolving to exceed expectations.'
    },
    {
      icon: Globe,
      title: 'Cultural Celebration',
      description: 'We honor diverse traditions while creating a welcoming home for guests worldwide.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Luxury',
      description: 'Our commitment to the environment ensures future generations can enjoy our natural beauty.'
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mt-4 mb-6"
            >
              A Legacy of<br />
              <span className="text-accent">Timeless Elegance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Since {hotelInfo.founded}, The Grand Serene has been a beacon of refined hospitality, 
              welcoming discerning travelers from around the world to experience our unique blend 
              of classic elegance and contemporary luxury.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-sage/30 to-sage/10 rounded-lg" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                A Heritage of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by the visionary hotelier William Ashworth, The Grand Serene was born 
                  from a simple yet profound belief: that true luxury lies not in opulence, but 
                  in the art of making guests feel genuinely cared for.
                </p>
                <p>
                  Over the decades, we have welcomed royalty, world leaders, artists, and dreamers 
                  alike—each finding within our walls a sanctuary of peace and refinement. Our 
                  commitment to excellence has earned us the most prestigious awards in hospitality, 
                  yet our greatest achievement remains the smiles of our departing guests.
                </p>
                <p>
                  Today, under the stewardship of the third generation of the Ashworth family, 
                  we continue to evolve while honoring the timeless principles that have guided 
                  us since day one: impeccable service, genuine warmth, and an unwavering 
                  attention to detail.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4"
            >
              Guiding Principles
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-body text-sm uppercase tracking-[0.3em]"
            >
              Leadership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4"
            >
              Meet Our Team
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em]">
              Recognition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
              Awards & Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hotelInfo.awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 rounded-lg text-center"
              >
                <Award size={32} className="text-accent mx-auto mb-4" />
                <p className="text-sm">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
