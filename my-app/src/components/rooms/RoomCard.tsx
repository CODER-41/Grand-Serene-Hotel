/**
 * 📁 src/components/rooms/RoomCard.tsx
 * Purpose: Individual room card with status and details
 * Depends on: types/hotel.types, ui/badge, framer-motion
 * Used by: Rooms page
 */

import { motion } from "framer-motion";
import { Room, RoomStatus, RoomType } from "@/types/hotel.types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bed, Users, Wifi, Tv, Wine, Eye } from "lucide-react";

interface RoomCardProps {
  room: Room;
  index?: number;
}

const statusConfig: Record<RoomStatus, { label: string; className: string }> = {
  available: { label: "Available", className: "bg-success/10 text-success border-success/30" },
  occupied: { label: "Occupied", className: "bg-muted text-muted-foreground border-border" },
  reserved: { label: "Reserved", className: "bg-gold/10 text-gold-dark border-gold/30" },
  maintenance: { label: "Maintenance", className: "bg-destructive/10 text-destructive border-destructive/30" },
  cleaning: { label: "Cleaning", className: "bg-sage-light text-sage border-sage/30" },
};

const typeLabels: Record<RoomType, string> = {
  standard: "Standard Room",
  deluxe: "Deluxe Room",
  suite: "Suite",
  presidential: "Presidential Suite",
  penthouse: "Penthouse",
};

export function RoomCard({ room, index = 0 }: RoomCardProps) {
  const status = statusConfig[room.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:shadow-medium hover:border-accent/30"
    >
      {/* Room Image Placeholder */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <Bed className="h-16 w-16 text-muted-foreground/30" />
        </div>
        
        {/* Status Badge */}
        <Badge
          className={cn(
            "absolute top-3 right-3 border",
            status.className
          )}
        >
          {status.label}
        </Badge>

        {/* Room Number */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="rounded-lg bg-foreground/80 px-3 py-1.5 font-display text-lg font-semibold text-background">
            {room.number}
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {typeLabels[room.type]}
            </h3>
            <p className="text-sm text-muted-foreground">
              Floor {room.floor}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-xl font-semibold text-foreground">
              ${room.pricePerNight}
            </p>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
        </div>

        {/* Amenities Icons */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{room.capacity}</span>
          </div>
          {room.amenities.includes('WiFi') && (
            <Wifi className="h-4 w-4 text-muted-foreground" />
          )}
          {room.amenities.includes('TV') && (
            <Tv className="h-4 w-4 text-muted-foreground" />
          )}
          {room.amenities.includes('Mini Bar') && (
            <Wine className="h-4 w-4 text-muted-foreground" />
          )}
          {room.amenities.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
          >
            <Eye className="h-4 w-4" />
            View
          </Button>
          {room.status === 'available' && (
            <Button
              size="sm"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book Now
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
