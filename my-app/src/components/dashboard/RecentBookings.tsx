/**
 * 📁 src/components/dashboard/RecentBookings.tsx
 * Purpose: Display table of recent/upcoming bookings
 * Depends on: types/hotel.types, ui/badge, framer-motion
 * Used by: Dashboard page
 */

import { motion } from "framer-motion";
import { Booking, BookingStatus } from "@/types/hotel.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays, User, Bed } from "lucide-react";

interface RecentBookingsProps {
  bookings: Booking[];
}

const statusStyles: Record<BookingStatus, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
  confirmed: { variant: "secondary", label: "Confirmed" },
  'checked-in': { variant: "default", label: "Checked In" },
  'checked-out': { variant: "outline", label: "Checked Out" },
  pending: { variant: "secondary", label: "Pending" },
  cancelled: { variant: "destructive", label: "Cancelled" },
};

export function RecentBookings({ bookings }: RecentBookingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-xl border border-border bg-card shadow-soft"
    >
      <div className="flex items-center justify-between border-b border-border p-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Recent Bookings
          </h3>
          <p className="text-sm text-muted-foreground">
            Latest reservations and check-ins
          </p>
        </div>
        <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
          View All
        </button>
      </div>

      <div className="divide-y divide-border">
        {bookings.map((booking, index) => {
          const statusStyle = statusStyles[booking.status];
          
          return (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30"
            >
              {/* Guest Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-display text-lg font-medium text-muted-foreground">
                {booking.guest.firstName[0]}{booking.guest.lastName[0]}
              </div>

              {/* Booking Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground truncate">
                    {booking.guest.firstName} {booking.guest.lastName}
                  </p>
                  {booking.guest.vipStatus && (
                    <Badge variant="outline" className="border-gold text-gold-dark text-xs">
                      VIP
                    </Badge>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    Room {booking.room.number}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {format(new Date(booking.checkInDate), "MMM d")} - {format(new Date(booking.checkOutDate), "MMM d")}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div className="hidden text-right sm:block">
                <p className="font-display text-lg font-semibold text-foreground">
                  ${booking.totalAmount.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {Math.ceil((new Date(booking.checkOutDate).getTime() - new Date(booking.checkInDate).getTime()) / (1000 * 60 * 60 * 24))} nights
                </p>
              </div>

              {/* Status */}
              <Badge
                variant={statusStyle.variant}
                className={cn(
                  "shrink-0",
                  booking.status === 'checked-in' && "bg-success text-success-foreground hover:bg-success/90"
                )}
              >
                {statusStyle.label}
              </Badge>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
