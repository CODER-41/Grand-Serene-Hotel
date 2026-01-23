/**
 * 📁 src/types/hotel.types.ts
 * Purpose: Core type definitions for the Hotel Management System
 * Depends on: None
 * Used by: All hotel-related components and services
 */

export type RoomStatus = 'available' | 'occupied' | 'maintenance' | 'reserved' | 'cleaning';

export type RoomType = 'standard' | 'deluxe' | 'suite' | 'presidential' | 'penthouse';

export type BookingStatus = 'confirmed' | 'checked-in' | 'checked-out' | 'cancelled' | 'pending';

export interface Room {
  id: string;
  number: string;
  floor: number;
  type: RoomType;
  status: RoomStatus;
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  imageUrl?: string;
}

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality?: string;
  idType?: string;
  idNumber?: string;
  vipStatus?: boolean;
  createdAt: Date;
}

export interface Booking {
  id: string;
  guestId: string;
  guest: Guest;
  roomId: string;
  room: Room;
  checkInDate: Date;
  checkOutDate: Date;
  status: BookingStatus;
  totalAmount: number;
  specialRequests?: string;
  createdAt: Date;
}

export interface DashboardMetrics {
  totalRooms: number;
  occupiedRooms: number;
  availableRooms: number;
  occupancyRate: number;
  todayCheckIns: number;
  todayCheckOuts: number;
  monthlyRevenue: number;
  pendingBookings: number;
}

export interface HousekeepingTask {
  id: string;
  roomId: string;
  room: Room;
  type: 'cleaning' | 'maintenance' | 'inspection';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
  notes?: string;
  createdAt: Date;
}

// ============= PUBLIC WEBSITE TYPES =============

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'accommodation' | 'dining' | 'wellness' | 'events' | 'experiences';
  imageUrl?: string;
  features: string[];
  priceRange?: string;
}

export interface DiningOption {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  openingHours: string;
  priceRange: 'budget' | 'moderate' | 'fine-dining';
  imageUrl?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  rating: number;
  comment: string;
  date: Date;
  avatarUrl?: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
