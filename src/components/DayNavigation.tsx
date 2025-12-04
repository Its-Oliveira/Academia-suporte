import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Day } from '@/types/training';
import { DayContent } from './DayContent';
import { cn } from '@/lib/utils';
interface DayNavigationProps {
  days: Day[];
  currentDayIndex: number;
  onDayChange: (index: number) => void;
}
export function DayNavigation({
  days,
  currentDayIndex,
  onDayChange
}: DayNavigationProps) {
  const navigate = useNavigate();
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');
  const currentDay = days[currentDayIndex];
  const canGoPrevious = currentDayIndex > 0;
  const canGoNext = currentDayIndex < days.length - 1;
  const handleDayChange = (newIndex: number) => {
    if (newIndex === currentDayIndex || isAnimating) return;
    setAnimationDirection(newIndex > currentDayIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      onDayChange(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 150);
  };
  const handleNextDay = () => {
    setIsTrainingStarted(false);
    handleDayChange(currentDayIndex + 1);
  };
  const handleBackToTraining = () => {
    navigate('/training');
  };
  return <div className="space-y-6">
      {/* Progress Indicator - Oculto quando treinamento iniciado */}
      {!isTrainingStarted && <div className="flex items-center justify-center gap-2">
          {days.map((day, index) => <Button key={day.id} variant={index === currentDayIndex ? 'default' : 'outline'} size="sm" onClick={() => handleDayChange(index)} className={cn("min-w-[100px] transition-all duration-300", index === currentDayIndex && "scale-105 shadow-md")}>
              {day.title}
            </Button>)}
        </div>}

      {/* Day Content with Animation */}
      <div className={cn("transition-all duration-300 ease-out", isAnimating && animationDirection === 'right' && "opacity-0 translate-x-4", isAnimating && animationDirection === 'left' && "opacity-0 -translate-x-4", !isAnimating && "opacity-100 translate-x-0")}>
        {currentDay.pages && currentDay.pages.length > 0 ? <DayContent key={currentDay.id} pages={currentDay.pages} onComplete={() => setIsTrainingStarted(false)} onTrainingStart={() => setIsTrainingStarted(true)} onNextDay={canGoNext ? handleNextDay : undefined} onBackToTraining={handleBackToTraining} dayNumber={currentDayIndex + 1} hasNextDay={canGoNext} dayDescription={currentDay.description} /> : <Card>
            
            
          </Card>}
      </div>

      {/* Navigation Buttons - Ocultos quando treinamento iniciado */}
      {!isTrainingStarted && <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => handleDayChange(currentDayIndex - 1)} disabled={!canGoPrevious || isAnimating} className="gap-2 transition-all duration-200 hover:scale-105">
            <ChevronLeft className="h-4 w-4" />
            Dia Anterior
          </Button>

          <Button onClick={() => handleDayChange(currentDayIndex + 1)} disabled={!canGoNext || isAnimating} className="gap-2 transition-all duration-200 hover:scale-105">
            Próximo Dia
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>}
    </div>;
}