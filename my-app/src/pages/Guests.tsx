/**
 * 📁 src/pages/Guests.tsx
 * Purpose: Guest management page placeholder
 * Depends on: layout/MainLayout
 * Used by: App.tsx routing
 */

import { MainLayout } from "@/components/layout/MainLayout";
import { mockGuests } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plus, Mail, Phone, Globe, Crown } from "lucide-react";

export default function Guests() {
  return (
    <MainLayout 
      title="Guests" 
      subtitle="Manage guest profiles and preferences"
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{mockGuests.length}</strong> registered guests
          </p>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            Add Guest
          </Button>
        </motion.div>

        {/* Guest Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockGuests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-medium"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted font-display text-xl font-semibold text-muted-foreground">
                  {guest.firstName[0]}{guest.lastName[0]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-foreground truncate">
                      {guest.firstName} {guest.lastName}
                    </h3>
                    {guest.vipStatus && (
                      <Badge className="bg-gold/10 text-gold-dark border-gold/30 gap-1">
                        <Crown className="h-3 w-3" />
                        VIP
                      </Badge>
                    )}
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="truncate">{guest.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0" />
                      <span>{guest.phone}</span>
                    </div>
                    {guest.nationality && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="h-4 w-4 shrink-0" />
                        <span>{guest.nationality}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  New Booking
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
