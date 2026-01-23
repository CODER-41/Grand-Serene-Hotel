/**
 * 📁 src/pages/Housekeeping.tsx
 * Purpose: Housekeeping task management page
 * Depends on: layout/MainLayout, mock data
 * Used by: App.tsx routing
 */

import { MainLayout } from "@/components/layout/MainLayout";
import { mockHousekeepingTasks, mockRooms } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Plus, Clock, User, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

const priorityStyles = {
  low: "bg-muted text-muted-foreground border-border",
  medium: "bg-sage-light text-sage border-sage/30",
  high: "bg-warning/10 text-warning border-warning/30",
  urgent: "bg-destructive/10 text-destructive border-destructive/30",
};

const statusIcons = {
  pending: Clock,
  'in-progress': Loader2,
  completed: CheckCircle,
};

export default function Housekeeping() {
  return (
    <MainLayout 
      title="Housekeeping" 
      subtitle="Manage cleaning and maintenance tasks"
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {mockHousekeepingTasks.filter(t => t.status === 'pending').length} Pending
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Loader2 className="h-3 w-3" />
              {mockHousekeepingTasks.filter(t => t.status === 'in-progress').length} In Progress
            </Badge>
          </div>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </motion.div>

        {/* Tasks Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockHousekeepingTasks.map((task, index) => {
            const StatusIcon = statusIcons[task.status];
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted font-display text-lg font-semibold text-foreground">
                      {task.room.number}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground capitalize">
                        {task.type}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Floor {task.room.floor} • {task.room.type}
                      </p>
                    </div>
                  </div>
                  <Badge className={cn("border", priorityStyles[task.priority])}>
                    {task.priority}
                  </Badge>
                </div>

                {task.notes && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {task.notes}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <StatusIcon className={cn(
                      "h-4 w-4",
                      task.status === 'in-progress' && "animate-spin"
                    )} />
                    <span className="capitalize">{task.status.replace('-', ' ')}</span>
                  </div>
                  
                  {task.assignedTo && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{task.assignedTo}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rooms Requiring Attention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-border bg-card p-6 shadow-soft"
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Rooms Requiring Attention
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {mockRooms
              .filter(room => room.status === 'cleaning' || room.status === 'maintenance')
              .map((room) => (
                <div
                  key={room.id}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border p-3",
                    room.status === 'maintenance' 
                      ? "bg-destructive/5 border-destructive/20" 
                      : "bg-sage-light/50 border-sage/20"
                  )}
                >
                  <AlertTriangle className={cn(
                    "h-5 w-5",
                    room.status === 'maintenance' ? "text-destructive" : "text-sage"
                  )} />
                  <div>
                    <p className="font-medium text-foreground">Room {room.number}</p>
                    <p className="text-xs text-muted-foreground capitalize">{room.status}</p>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
