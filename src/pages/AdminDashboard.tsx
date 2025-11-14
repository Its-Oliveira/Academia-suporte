import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, BookOpen, Award } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';

const AdminDashboard = () => {
  // Mock data
  const stats = [
    { title: 'Total de Usuários', value: '2', icon: Users, change: '+0%' },
    { title: 'Taxa de Conclusão', value: '0%', icon: Award, change: '0%' },
    { title: 'Módulos Ativos', value: '3', icon: BookOpen, change: '0%' },
    { title: 'Média Geral', value: '-', icon: TrendingUp, change: '0%' },
  ];

  const usersList = [
    { name: 'Admin Sistema', email: 'admin@sistema.com', level: 3, progress: 100, avgScore: 100 },
    { name: 'João Silva', email: 'joao@sistema.com', level: 1, progress: 0, avgScore: 0 },
  ];

  const moduleStats = [
    { name: 'Importação de Planilha', attempts: 0, avgScore: 0, completionRate: 0 },
    { name: 'Como Criar Composição', attempts: 0, avgScore: 0, completionRate: 0 },
    { name: 'Como Criar Insumo', attempts: 0, avgScore: 0, completionRate: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Administrativo</h1>
        <p className="text-muted-foreground mt-2">
          Acompanhe o desempenho e progresso de todos os usuários
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
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change} vs. mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
          <TabsTrigger value="performance">Desempenho</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Usuários</CardTitle>
              <CardDescription>Progresso e desempenho individual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usersList.map((user, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Nível {user.level}</p>
                        <p className="text-xs text-muted-foreground">
                          Média: {user.avgScore > 0 ? `${user.avgScore}%` : '-'}
                        </p>
                      </div>
                    </div>
                    <ProgressBar value={user.progress} label="Progresso Geral" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas por Módulo</CardTitle>
              <CardDescription>Desempenho em cada módulo de treinamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moduleStats.map((module, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold">{module.name}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Tentativas</p>
                        <p className="font-medium">{module.attempts}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Média</p>
                        <p className="font-medium">
                          {module.avgScore > 0 ? `${module.avgScore}%` : '-'}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Taxa Conclusão</p>
                        <p className="font-medium">{module.completionRate}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Desempenho</CardTitle>
              <CardDescription>Identificação de pontos de melhoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Módulos com Mais Dificuldade</h3>
                  <p className="text-sm text-muted-foreground">
                    Nenhum dado disponível ainda. Complete alguns módulos para ver estatísticas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Tempo Médio por Módulo</h3>
                  <div className="space-y-2">
                    {moduleStats.map((module, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{module.name}</span>
                        <span className="font-medium">-</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Usuários que Precisam de Atenção</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos os usuários estão progredindo adequadamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
