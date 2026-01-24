/**
 * 📁 src/pages/AdminRooms.tsx
 * Purpose: Room management page with filtering and grid view
 * Depends on: layout/MainLayout, rooms/RoomCard, mock data
 * Used by: App.tsx routing
 */

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { RoomCard } from "@/components/rooms/RoomCard";
import { mockRooms } from "@/data/mockData";
import { RoomStatus } from "@/types/hotel.types";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const statusFilters: { value: RoomStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Rooms' },
  { value: 'available', label: 'Available' },
  { value: 'occupied', label: 'Occupied' },
  { value: 'reserved', label: 'Reserved' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'cleaning', label: 'Cleaning' },
];

export default function AdminRooms() {
  const [statusFilter, setStatusFilter] = useState<RoomStatus | 'all'>('all');

  const filteredRooms = mockRooms.filter(room =>
    statusFilter === 'all' || room.status === statusFilter
  );

  return (
    <MainLayout
      title="Rooms Management"
      subtitle="Manage all hotel rooms and their status"
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

          {/* Add Room Button */}
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            Add Room
          </Button>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span>
            Showing <strong className="text-foreground">{filteredRooms.length}</strong> of{" "}
            <strong className="text-foreground">{mockRooms.length}</strong> rooms
          </span>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredRooms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              No rooms found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your filters to see more rooms
            </p>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
}