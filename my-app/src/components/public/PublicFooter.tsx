/**
 * 📁 src/components/public/PublicFooter.tsx
 * Purpose: Footer for public-facing pages
 * Depends on: react-router-dom, lucide-react
 * Used by: PublicLayout
 */

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { hotelInfo, contactInfo } from '@/data/publicData';

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">
              <span className="text-accent">The</span> Grand Serene
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {hotelInfo.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accommodations', path: '/rooms' },
                { name: 'Dining', path: '/services' },
                { name: 'Wellness & Spa', path: '/services' },
                { name: 'Events', path: '/services' },
                { name: 'Gallery', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guest Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Guest Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Reservations', path: '/bookings' },
                { name: 'Concierge', path: '/contact' },
                { name: 'Airport Transfers', path: '/services' },
                { name: 'Gift Cards', path: '/contact' },
                { name: 'Careers', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  {contactInfo.address}<br />
                  {contactInfo.city}, {contactInfo.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {currentYear} {hotelInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-primary-foreground/50 hover:text-accent text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary-foreground/50 hover:text-accent text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-primary-foreground/50 hover:text-accent text-xs transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
