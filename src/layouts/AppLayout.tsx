import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TrainingSidebar } from '@/components/TrainingSidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <TrainingSidebar />
        <main className="flex-1 p-6 md:p-8 lg:p-10 bg-background overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
