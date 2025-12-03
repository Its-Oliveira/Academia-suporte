import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, ChevronRight } from 'lucide-react';

interface EvaluationScreenProps {
  dayNumber: number;
  onContinue: () => void;
}

export function EvaluationScreen({ dayNumber, onContinue }: EvaluationScreenProps) {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card className="border-2 border-primary/20">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
            <ClipboardList className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Avaliação - Dia {dayNumber}</CardTitle>
          <CardDescription className="text-base mt-2">
            Você completou todos os módulos do dia! Agora é hora da avaliação.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          {/* Placeholder para conteúdo de avaliação */}
          <div className="min-h-[200px] border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-muted/30">
            <p className="text-muted-foreground text-center px-4">
              Conteúdo da avaliação em desenvolvimento
            </p>
          </div>

          {/* Botão continuar */}
          <Button 
            onClick={onContinue} 
            size="lg" 
            className="w-full gap-2"
          >
            Continuar para Conclusão
            <ChevronRight className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
