import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TrainingSidebar } from '@/components/TrainingSidebar';
import { ThemeToggle } from '@/components/ThemeToggle';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <TrainingSidebar />
        <main className="flex-1 p-6 md:p-8 lg:p-10 bg-background overflow-auto relative">
          <div className="absolute top-4 right-4 z-10">
            <ThemeToggle />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
