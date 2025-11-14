import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle2, Lock } from 'lucide-react';
import { Module } from '@/types/training';
import { ProgressBar } from './ProgressBar';
import { useNavigate } from 'react-router-dom';

interface ModuleCardProps {
  module: Module;
  progress?: number;
  isLocked?: boolean;
  attempts?: number;
  bestScore?: number;
}

export function ModuleCard({ module, progress = 0, isLocked = false, attempts = 0, bestScore }: ModuleCardProps) {
  const navigate = useNavigate();
  const isCompleted = progress === 100;

  const handleStart = () => {
    if (!isLocked) {
      navigate(`/module/${module.id}`);
    }
  };

  return (
    <Card className={isLocked ? 'opacity-60' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{module.title}</CardTitle>
            <CardDescription className="mt-1">{module.description}</CardDescription>
          </div>
          {isLocked && <Lock className="h-5 w-5 text-muted-foreground" />}
          {isCompleted && <CheckCircle2 className="h-5 w-5 text-success" />}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{module.duration}</span>
          </div>
          <Badge variant="outline">Nível {module.level}</Badge>
        </div>

        {!isLocked && progress > 0 && (
          <ProgressBar value={progress} label="Progresso" />
        )}

        {bestScore !== undefined && (
          <div className="text-sm">
            <span className="text-muted-foreground">Melhor nota: </span>
            <span className={`font-semibold ${bestScore >= 70 ? 'text-success' : 'text-warning'}`}>
              {bestScore}%
            </span>
            {attempts > 0 && (
              <span className="text-muted-foreground ml-2">
                ({attempts} {attempts === 1 ? 'tentativa' : 'tentativas'})
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          onClick={handleStart} 
          disabled={isLocked} 
          className="w-full"
          variant={isCompleted ? "outline" : "default"}
        >
          {isLocked ? 'Bloqueado' : isCompleted ? 'Revisar' : progress > 0 ? 'Continuar' : 'Iniciar Módulo'}
        </Button>
      </CardFooter>
    </Card>
  );
}
