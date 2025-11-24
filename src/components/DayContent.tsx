import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChecklistSection } from './ChecklistSection';
import { DayPage } from '@/types/training';
import { Badge } from '@/components/ui/badge';

interface DayContentProps {
  pages: DayPage[];
  onComplete?: () => void;
}

export function DayContent({ pages, onComplete }: DayContentProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pagesData, setPagesData] = useState<DayPage[]>(pages);

  const currentPage = pagesData[currentPageIndex];
  const canGoPrevious = currentPageIndex > 0;
  const canGoNext = currentPageIndex < pagesData.length - 1;

  const handleItemToggle = (itemId: string) => {
    setPagesData(prev => prev.map(page => 
      page.id === currentPage.id
        ? {
            ...page,
            items: page.items.map(item =>
              item.id === itemId ? { ...item, completed: !item.completed } : item
            )
          }
        : page
    ));
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentPageIndex(prev => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Indicator */}
      <div className="flex items-center justify-center gap-2">
        <Badge variant="outline" className="text-sm">
          Módulo {currentPageIndex + 1} de {pagesData.length}
        </Badge>
      </div>

      {/* Checklist Content */}
      <ChecklistSection
        title={currentPage.title}
        subtitle={currentPage.subtitle}
        items={currentPage.items}
        onItemToggle={handleItemToggle}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => setCurrentPageIndex(prev => prev - 1)}
          disabled={!canGoPrevious}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar: Módulo {currentPageIndex}
        </Button>

        <Button
          onClick={handleNext}
          className="gap-2"
        >
          {canGoNext ? `Próximo: Módulo ${currentPageIndex + 2}` : 'Concluir Dia 1'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
