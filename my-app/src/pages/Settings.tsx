/**
 * 📁 src/pages/Settings.tsx
 * Purpose: Settings page placeholder
 * Depends on: layout/MainLayout
 * Used by: App.tsx routing
 */

import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  CreditCard, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  HelpCircle
} from "lucide-react";

const settingsSections = [
  {
    title: "Hotel Profile",
    description: "Manage hotel information, branding, and contact details",
    icon: Building2,
  },
  {
    title: "Staff Management",
    description: "Add, remove, and manage staff accounts and permissions",
    icon: Users,
  },
  {
    title: "Payment Settings",
    description: "Configure payment methods and billing preferences",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    description: "Customize email and push notification preferences",
    icon: Bell,
  },
  {
    title: "Security",
    description: "Manage passwords, 2FA, and access controls",
    icon: Shield,
  },
  {
    title: "Appearance",
    description: "Customize the look and feel of your dashboard",
    icon: Palette,
  },
  {
    title: "Integrations",
    description: "Connect third-party services and APIs",
    icon: Globe,
  },
  {
    title: "Help & Support",
    description: "Access documentation and contact support",
    icon: HelpCircle,
  },
];

export default function Settings() {
  return (
    <MainLayout 
      title="Settings" 
      subtitle="Configure your hotel management system"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-medium hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-accent/10">
                <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {section.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </MainLayout>
  );
}
