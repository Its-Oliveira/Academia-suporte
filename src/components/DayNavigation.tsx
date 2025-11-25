import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Day } from '@/types/training';
import { DayContent } from './DayContent';

interface DayNavigationProps {
  days: Day[];
  currentDayIndex: number;
  onDayChange: (index: number) => void;
}

export function DayNavigation({ days, currentDayIndex, onDayChange }: DayNavigationProps) {
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);
  const currentDay = days[currentDayIndex];
  const canGoPrevious = currentDayIndex > 0;
  const canGoNext = currentDayIndex < days.length - 1;

  return (
    <div className="space-y-6">
      {/* Progress Indicator - Oculto quando treinamento iniciado */}
      {!isTrainingStarted && (
        <div className="flex items-center justify-center gap-2">
          {days.map((day, index) => (
            <Button
              key={day.id}
              variant={index === currentDayIndex ? 'default' : 'outline'}
              size="sm"
              onClick={() => onDayChange(index)}
              className="min-w-[100px]"
            >
              {day.title}
            </Button>
          ))}
        </div>
      )}

      {/* Day Content */}
      {currentDay.pages && currentDay.pages.length > 0 ? (
        <DayContent 
          pages={currentDay.pages}
          onComplete={() => {
            setIsTrainingStarted(false); // Reset ao completar
            if (canGoNext) {
              onDayChange(currentDayIndex + 1);
            }
          }}
          onTrainingStart={() => setIsTrainingStarted(true)}
        />
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{currentDay.title}</CardTitle>
                <CardDescription className="mt-2">{currentDay.description}</CardDescription>
              </div>
              <Badge variant="outline">
                Dia {currentDayIndex + 1} de {days.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Content */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Conteúdo do Treinamento</h3>
              <div 
                className="prose prose-sm max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: currentDay.content }}
              />
            </div>

            {/* Exercises */}
            {currentDay.exercises && (
              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Atividades Práticas</h3>
                <div 
                  className="prose prose-sm max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: currentDay.exercises }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons - Ocultos quando treinamento iniciado */}
      {!isTrainingStarted && (
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => onDayChange(currentDayIndex - 1)}
            disabled={!canGoPrevious}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Dia Anterior
          </Button>

          <Button
            onClick={() => onDayChange(currentDayIndex + 1)}
            disabled={!canGoNext}
            className="gap-2"
          >
            Próximo Dia
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
