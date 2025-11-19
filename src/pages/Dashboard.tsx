import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { Trophy, BookOpen, Target, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Módulos Totais',
      value: '3',
      icon: BookOpen,
      description: 'Disponíveis',
    },
    {
      title: 'Módulos Concluídos',
      value: '0/3',
      icon: Trophy,
      description: 'Continue aprendendo',
    },
    {
      title: 'Progresso Geral',
      value: '0%',
      icon: Target,
      description: 'Continue aprendendo',
    },
    {
      title: 'Última Atividade',
      value: 'Hoje',
      icon: TrendingUp,
      description: 'Bem-vindo!',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bem-vindo, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2">
          Acompanhe seu progresso e continue seu treinamento
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Seu Progresso</CardTitle>
          <CardDescription>Complete os módulos de treinamento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProgressBar value={0} label="Progresso Total" />
          
          <div className="space-y-2 pt-4">
            <h3 className="font-semibold text-sm">Próximos Passos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Inicie o Módulo 1
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-muted" />
                Complete o quiz com nota mínima de 70%
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-muted" />
                Continue para os próximos módulos
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {user?.role === 'admin' && (
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Acesso Administrativo
            </CardTitle>
            <CardDescription>
              Como administrador, você tem acesso ao dashboard completo de análise e gestão de usuários
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
