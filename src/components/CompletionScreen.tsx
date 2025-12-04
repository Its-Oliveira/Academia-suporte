import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';

interface CompletionScreenProps {
  dayNumber: number;
  onNextDay?: () => void;
  onBackToTraining: () => void;
  hasNextDay: boolean;
}

export function CompletionScreen({ 
  dayNumber, 
  onNextDay, 
  onBackToTraining,
  hasNextDay 
}: CompletionScreenProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-primary/20">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-6">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl">
            Parabéns!
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Você concluiu o <strong>Dia {dayNumber}</strong> do treinamento com sucesso!
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              Continue sua jornada de aprendizado para desbloquear mais conteúdos e aprimorar suas habilidades.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            {hasNextDay && onNextDay && (
              <Button 
                onClick={onNextDay} 
                size="lg" 
                className="w-full gap-2"
              >
                Continuar para Dia {dayNumber + 1}
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
            
            <Button 
              onClick={onBackToTraining}
              variant={hasNextDay ? "outline" : "default"}
              size="lg"
              className="w-full gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar para Treinamentos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
