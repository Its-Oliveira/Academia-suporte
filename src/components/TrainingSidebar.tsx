import { Home, BookOpen, Library, User, LayoutDashboard, LogOut } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export function TrainingSidebar() {
  const { user, logout } = useAuth();

  const studentItems = [
    { title: 'Início', url: '/dashboard', icon: Home },
    { title: 'Meus Treinamentos', url: '/training', icon: BookOpen },
    { title: 'Biblioteca', url: '/library', icon: Library },
    { title: 'Perfil', url: '/profile', icon: User },
  ];

  const adminItems = [
    { title: 'Início', url: '/dashboard', icon: Home },
    { title: 'Meus Treinamentos', url: '/training', icon: BookOpen },
    { title: 'Biblioteca', url: '/library', icon: Library },
    { title: 'Dashboard Admin', url: '/admin', icon: LayoutDashboard },
    { title: 'Perfil', url: '/profile', icon: User },
  ];

  const items = user?.role === 'admin' ? adminItems : studentItems;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold text-sidebar-foreground">
          Sistema de Treinamento
        </h2>
        <p className="text-xs text-sidebar-foreground/60">{user?.name}</p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 hover:bg-sidebar-accent rounded-md transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button 
          onClick={logout} 
          variant="outline" 
          className="w-full justify-start gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
