import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ProgressBar';
import { Award, BookOpen, TrendingUp, Calendar } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  const achievements = [
    { title: 'Primeiro Login', completed: true, date: 'Hoje' },
    { title: 'Primeiro Módulo', completed: false, date: '-' },
    { title: 'Aprovado no Nível 1', completed: false, date: '-' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
        <p className="text-muted-foreground mt-2">
          Acompanhe seu progresso e conquistas
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Nome</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Perfil</p>
              <Badge variant="outline">
                {user?.role === 'admin' ? 'Administrador' : 'Aluno'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nível Atual</CardTitle>
            <CardDescription>Seu progresso no treinamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-4xl font-bold mb-2">Nível {user?.currentLevel || 1}</div>
              <p className="text-muted-foreground">Básico</p>
            </div>
            <ProgressBar value={0} label="Progresso no Nível" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Estatísticas de Aprendizado
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">Módulos Concluídos</span>
            </div>
            <p className="text-2xl font-bold">0/3</p>
            <p className="text-xs text-muted-foreground">Nível 1</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Média de Notas</span>
            </div>
            <p className="text-2xl font-bold">-</p>
            <p className="text-xs text-muted-foreground">Nenhuma avaliação ainda</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Dias Ativos</span>
            </div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-muted-foreground">Continue estudando!</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Conquistas
          </CardTitle>
          <CardDescription>Suas realizações no sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  achievement.completed ? 'bg-success/10 border-success/20' : 'bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Award
                    className={`h-5 w-5 ${
                      achievement.completed ? 'text-success' : 'text-muted-foreground'
                    }`}
                  />
                  <span className={achievement.completed ? 'font-medium' : 'text-muted-foreground'}>
                    {achievement.title}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{achievement.date}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
