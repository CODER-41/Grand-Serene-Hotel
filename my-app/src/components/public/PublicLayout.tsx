/**
 * 📁 src/components/public/PublicLayout.tsx
 * Purpose: Layout wrapper for public-facing hotel pages
 * Depends on: PublicNav, PublicFooter
 * Used by: Landing, About, Services, Contact pages
 */

import { ReactNode } from 'react';
import PublicNav from './PublicNav';
import PublicFooter from './PublicFooter';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PublicNav />
      <main className="flex-1">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
