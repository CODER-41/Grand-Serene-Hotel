/**
 * 📁 src/App.tsx
 * Purpose: Root application component with routing configuration
 * Depends on: All page components, providers
 * Used by: main.tsx
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";

// Admin/Management pages
import Dashboard from "./pages/Dashboard";
import AdminRooms from "./pages/AdminRooms";
import Bookings from "./pages/Bookings";
import Guests from "./pages/Guests";
import Housekeeping from "./pages/Housekeeping";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin/Management Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
