/**
 * 📁 src/pages/Dashboard.tsx
 * Purpose: Main dashboard page with key metrics and overview
 * Depends on: layout/MainLayout, dashboard components, mock data
 * Used by: App.tsx routing
 */

import { MainLayout } from "@/components/layout/MainLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RoomStatusOverview } from "@/components/dashboard/RoomStatusOverview";
import { RecentBookings } from "@/components/dashboard/RecentBookings";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { mockRooms, mockBookings, mockDashboardMetrics } from "@/data/mockData";
import { 
  Bed, 
  CalendarDays, 
  Users, 
  DollarSign, 
  TrendingUp, 
  TrendingDown 
} from "lucide-react";

export default function Dashboard() {
  const metrics = mockDashboardMetrics;

  return (
    <MainLayout 
      title="Dashboard" 
      subtitle="Welcome back to Grand Azure Hotel"
    >
      <div className="space-y-6">
        {/* KPI Metrics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Occupancy Rate"
            value={`${metrics.occupancyRate}%`}
            subtitle={`${metrics.occupiedRooms} of ${metrics.totalRooms} rooms`}
            icon={Bed}
            variant="gold"
            trend={{ value: 5.2, isPositive: true }}
            delay={0}
          />
          <MetricCard
            title="Today's Check-ins"
            value={metrics.todayCheckIns}
            subtitle="Arrivals expected"
            icon={TrendingUp}
            variant="success"
            delay={0.05}
          />
          <MetricCard
            title="Today's Check-outs"
            value={metrics.todayCheckOuts}
            subtitle="Departures scheduled"
            icon={TrendingDown}
            variant="default"
            delay={0.1}
          />
          <MetricCard
            title="Monthly Revenue"
            value={`$${(metrics.monthlyRevenue / 1000).toFixed(0)}k`}
            subtitle="January 2026"
            icon={DollarSign}
            variant="gold"
            trend={{ value: 12.3, isPositive: true }}
            delay={0.15}
          />
        </div>

        {/* Room Status Overview */}
        <RoomStatusOverview rooms={mockRooms} />

        {/* Recent Bookings & Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentBookings bookings={mockBookings} />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
