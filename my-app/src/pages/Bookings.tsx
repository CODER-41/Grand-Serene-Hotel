/**
 * 📁 src/pages/Bookings.tsx
 * Purpose: Booking management page with list view
 * Depends on: layout/MainLayout, mock data, ui components
 * Used by: App.tsx routing
 */

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { mockBookings } from "@/data/mockData";
import { BookingStatus } from "@/types/hotel.types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  CalendarDays, 
  User, 
  Bed, 
  MoreHorizontal,
  Eye,
  Edit,
  XCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const statusFilters: { value: BookingStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'checked-in', label: 'Checked In' },
  { value: 'checked-out', label: 'Checked Out' },
  { value: 'cancelled', label: 'Cancelled' },
];

const statusStyles: Record<BookingStatus, string> = {
  pending: "bg-warning/10 text-warning border-warning/30",
  confirmed: "bg-sage-light text-sage border-sage/30",
  'checked-in': "bg-success/10 text-success border-success/30",
  'checked-out': "bg-muted text-muted-foreground border-border",
  cancelled: "bg-destructive/10 text-destructive border-destructive/30",
};

export default function Bookings() {
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'all'>('all');

  const filteredBookings = mockBookings.filter(booking => 
    statusFilter === 'all' || booking.status === statusFilter
  );

  return (
    <MainLayout 
      title="Bookings" 
      subtitle="Manage reservations and check-ins"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((filter) => (
              <Button
                key={filter.value}
                variant={statusFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(filter.value)}
                className={cn(
                  "transition-all",
                  statusFilter === filter.value && "bg-accent text-accent-foreground"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Add Booking Button */}
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            New Booking
          </Button>
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card shadow-soft overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Guest
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Room
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Check-in
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Check-out
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 + index * 0.03 }}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-display text-sm font-medium text-muted-foreground">
                          {booking.guest.firstName[0]}{booking.guest.lastName[0]}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {booking.guest.firstName} {booking.guest.lastName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {booking.guest.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">
                          {booking.room.number}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({booking.room.type})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-foreground">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        {format(new Date(booking.checkInDate), "MMM d, yyyy")}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-foreground">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        {format(new Date(booking.checkOutDate), "MMM d, yyyy")}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-display text-lg font-semibold text-foreground">
                        ${booking.totalAmount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={cn("border", statusStyles[booking.status])}>
                        {booking.status.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Edit className="h-4 w-4" />
                            Edit Booking
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-destructive">
                            <XCircle className="h-4 w-4" />
                            Cancel Booking
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CalendarDays className="h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                No bookings found
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or create a new booking
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}
