/**
 * 📁 src/components/layout/AppSidebar.tsx
 * Purpose: Main navigation sidebar with hotel branding
 * Depends on: ui/sidebar, lucide-react, NavLink
 * Used by: Layout wrapper component
 */

import { 
  LayoutDashboard, 
  Bed, 
  CalendarDays, 
  Users, 
  ClipboardList,
  Settings,
  LogOut,
  Sparkles
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Rooms", url: "/rooms", icon: Bed },
  { title: "Bookings", url: "/bookings", icon: CalendarDays },
  { title: "Guests", url: "/guests", icon: Users },
  { title: "Housekeeping", url: "/housekeeping", icon: ClipboardList },
];

const settingsNavItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className="border-r-0"
      collapsible="icon"
    >
      {/* Hotel Branding */}
      <div className="flex h-20 items-center justify-center border-b border-sidebar-border px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
            <Sparkles className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-sidebar-foreground">
                Grand Azure
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                Hotel & Resort
              </span>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="px-2 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/80 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-primary/10 text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="px-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/80 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-primary/10 text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile Footer */}
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-sm font-medium text-sidebar-accent-foreground">
            JD
          </div>
          {!collapsed && (
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">
                John Doe
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                General Manager
              </span>
            </div>
          )}
          {!collapsed && (
            <button title="Logout" className="rounded-lg p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
