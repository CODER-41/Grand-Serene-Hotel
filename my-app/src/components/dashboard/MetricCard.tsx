import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'gold' | 'success' | 'warning';
  delay?: number;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = 'default',
  delay = 0,
}: MetricCardProps) {
  const variants = {
    default: "bg-card border-border",
    gold: "bg-gradient-to-br from-gold/5 to-gold/10 border-gold/20",
    success: "bg-gradient-to-br from-success/5 to-success/10 border-success/20",
    warning: "bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20",
  };

  const iconVariants = {
    default: "bg-muted text-muted-foreground",
    gold: "bg-gold/20 text-gold-dark",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative overflow-hidden rounded-xl border p-6 shadow-soft transition-all hover:shadow-medium",
        variants[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="font-display text-3xl font-semibold text-foreground">
              {value}
            </h3>
            {trend && (
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
            iconVariants[variant]
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Decorative accent */}
      <div
        className={cn(
          "absolute -bottom-1 -right-1 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20",
          variant === 'gold' && "bg-gold",
          variant === 'success' && "bg-success",
          variant === 'warning' && "bg-warning",
          variant === 'default' && "bg-foreground"
        )}
      />
    </motion.div>
  );
}
