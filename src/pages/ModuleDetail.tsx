import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '@/data/modules';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { DayNavigation } from '@/components/DayNavigation';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = modules.find(m => m.id === moduleId);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Módulo não encontrado</h2>
        <Button onClick={() => navigate('/training')} className="mt-4">
          Voltar aos Treinamentos
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate('/training')}
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Button>

      <div>
        <h1 className="text-3xl font-bold text-foreground">{module.title}</h1>
        <p className="text-muted-foreground mt-2">{module.description}</p>
      </div>

      {/* Show Days Navigation if module has days */}
      {module.days && module.days.length > 0 ? (
        <DayNavigation 
          days={module.days}
          currentDayIndex={currentDayIndex}
          onDayChange={setCurrentDayIndex}
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Conteúdo do Módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: module.content }}
            />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Avaliação</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Este módulo contém {module.quiz.questions.length === 0 ? 'um quiz em desenvolvimento' : `um quiz com ${module.quiz.questions.length} questões`}.
            {module.quiz.questions.length > 0 && ` Você precisa atingir no mínimo ${module.quiz.passingScore}% para ser aprovado.`}
          </p>
          {module.quiz.questions.length > 0 && (
            <>
              <p className="text-sm text-muted-foreground">
                Tentativas disponíveis: {module.quiz.maxAttempts}
              </p>
              <Button 
                onClick={() => navigate(`/quiz/${module.id}`)}
                className="gap-2"
              >
                <PlayCircle className="h-4 w-4" />
                Iniciar Quiz
              </Button>
            </>
          )}
          {module.quiz.questions.length === 0 && (
            <p className="text-sm text-muted-foreground">Quiz em desenvolvimento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleDetail;
