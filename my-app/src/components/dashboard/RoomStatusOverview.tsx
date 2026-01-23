/**
 * 📁 src/components/dashboard/RoomStatusOverview.tsx
 * Purpose: Visual grid showing room status distribution
 * Depends on: types/hotel.types, framer-motion
 * Used by: Dashboard page
 */

import { motion } from "framer-motion";
import { Room, RoomStatus } from "@/types/hotel.types";
import { cn } from "@/lib/utils";
import { Bed, CheckCircle, XCircle, Clock, Sparkles } from "lucide-react";

interface RoomStatusOverviewProps {
  rooms: Room[];
}

const statusConfig: Record<RoomStatus, { 
  label: string; 
  color: string; 
  bgColor: string;
  icon: typeof Bed;
}> = {
  available: { 
    label: "Available", 
    color: "text-success", 
    bgColor: "bg-success/10 border-success/20",
    icon: CheckCircle 
  },
  occupied: { 
    label: "Occupied", 
    color: "text-foreground", 
    bgColor: "bg-muted border-border",
    icon: Bed 
  },
  reserved: { 
    label: "Reserved", 
    color: "text-gold-dark", 
    bgColor: "bg-gold/10 border-gold/20",
    icon: Clock 
  },
  maintenance: { 
    label: "Maintenance", 
    color: "text-destructive", 
    bgColor: "bg-destructive/10 border-destructive/20",
    icon: XCircle 
  },
  cleaning: { 
    label: "Cleaning", 
    color: "text-sage", 
    bgColor: "bg-sage-light border-sage/20",
    icon: Sparkles 
  },
};

export function RoomStatusOverview({ rooms }: RoomStatusOverviewProps) {
  const statusCounts = rooms.reduce((acc, room) => {
    acc[room.status] = (acc[room.status] || 0) + 1;
    return acc;
  }, {} as Record<RoomStatus, number>);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl border border-border bg-card p-6 shadow-soft"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Room Status
          </h3>
          <p className="text-sm text-muted-foreground">
            Current availability overview
          </p>
        </div>
        <span className="text-sm text-muted-foreground">
          {rooms.length} total rooms
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {Object.entries(statusConfig).map(([status, config], index) => {
          const count = statusCounts[status as RoomStatus] || 0;
          const Icon = config.icon;
          
          return (
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all hover:shadow-soft",
                config.bgColor
              )}
            >
              <Icon className={cn("h-5 w-5", config.color)} />
              <span className="font-display text-2xl font-semibold text-foreground">
                {count}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {config.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Room Grid Visualization */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-muted-foreground">Room Grid</p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {rooms.map((room, index) => {
            const config = statusConfig[room.status];
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 + index * 0.02 }}
                className={cn(
                  "flex h-10 items-center justify-center rounded-md border text-xs font-medium transition-all hover:scale-105",
                  config.bgColor,
                  config.color
                )}
                title={`Room ${room.number} - ${config.label}`}
              >
                {room.number}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
