/**
 * 📁 src/components/dashboard/QuickActions.tsx
 * Purpose: Quick action buttons for common tasks
 * Depends on: ui/button, lucide-react, framer-motion
 * Used by: Dashboard page
 */

import { motion } from "framer-motion";
import { Plus, UserPlus, CalendarPlus, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickAction {
  label: string;
  description: string;
  icon: typeof Plus;
  onClick?: () => void;
}

const actions: QuickAction[] = [
  {
    label: "New Booking",
    description: "Create a reservation",
    icon: CalendarPlus,
  },
  {
    label: "Add Guest",
    description: "Register new guest",
    icon: UserPlus,
  },
  {
    label: "Check-In",
    description: "Process arrival",
    icon: ClipboardCheck,
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl border border-border bg-card p-6 shadow-soft"
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Quick Actions
      </h3>

      <div className="grid gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-auto py-3 px-4 border-border bg-background hover:bg-muted/50 hover:border-accent/50 transition-all group"
                onClick={action.onClick}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-accent/10 transition-colors">
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-medium text-foreground">{action.label}</span>
                  <span className="text-xs text-muted-foreground">{action.description}</span>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
