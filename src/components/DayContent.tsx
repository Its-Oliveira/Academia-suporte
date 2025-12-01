import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, PlayCircle, CheckCircle } from 'lucide-react';
import { ChecklistSection } from './ChecklistSection';
import { DayPage } from '@/types/training';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrainingTimer } from './TrainingTimer';
import { ProgressBar } from './ProgressBar';
import { CompletionScreen } from './CompletionScreen';

interface DayContentProps {
  pages: DayPage[];
  onComplete?: () => void;
  onTrainingStart?: () => void;
  onNextDay?: () => void;
  onBackToTraining: () => void;
  dayNumber: number;
  hasNextDay: boolean;
  dayDescription: string;
}

export function DayContent({ 
  pages, 
  onComplete, 
  onTrainingStart,
  onNextDay,
  onBackToTraining,
  dayNumber,
  hasNextDay,
  dayDescription
}: DayContentProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pagesData, setPagesData] = useState<DayPage[]>(pages);

  const currentPage = pagesData[currentPageIndex];
  const canGoPrevious = currentPageIndex > 0;
  const canGoNext = currentPageIndex < pagesData.length - 1;
  
  // Verificar se todos os itens da página atual estão completos
  const allCurrentPageItemsComplete = currentPage.items.every(item => item.completed);
  
  // Verificar se todas as páginas estão 100% completas
  const allPagesComplete = pagesData.every(page => 
    page.items.every(item => item.completed)
  );
  
  // Calcular progresso total
  const allItemsCount = pagesData.reduce((sum, page) => sum + page.items.length, 0);
  const completedItemsCount = pagesData.reduce((sum, page) => 
    sum + page.items.filter(item => item.completed).length, 0
  );
  const overallProgress = Math.round((completedItemsCount / allItemsCount) * 100);

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

  const handleMarkPageComplete = () => {
    // Marcar TODOS os itens da página atual como completos
    setPagesData(prev => prev.map(page => 
      page.id === currentPage.id
        ? {
            ...page,
            items: page.items.map(item => ({ ...item, completed: true }))
          }
        : page
    ));
  };

  const handleNext = () => {
    if (!allCurrentPageItemsComplete) {
      return; // Bloqueia navegação se não todos os itens estiverem completos
    }
    
    if (canGoNext) {
      setCurrentPageIndex(prev => prev + 1);
    } else if (allPagesComplete) {
      setIsCompleted(true);
      onComplete?.();
    }
  };

  const handleStartTraining = () => {
    setIsStarted(true);
    onTrainingStart?.();
  };

  // Tela de conclusão
  if (isCompleted) {
    return (
      <CompletionScreen 
        dayNumber={dayNumber}
        onNextDay={onNextDay}
        onBackToTraining={onBackToTraining}
        hasNextDay={hasNextDay}
      />
    );
  }

  // Tela de prévia antes de iniciar o treinamento
  if (!isStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">📚 Prévia do Treinamento - Dia {dayNumber}</CardTitle>
            <CardDescription>
              {dayDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Resumo dos módulos */}
            <div className="space-y-4">
              {pagesData.map((page, index) => (
                <div key={page.id} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg mb-2">{page.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{page.subtitle}</p>
                  <p className="text-sm">
                    <strong>{page.items.length} itens</strong> de checklist
                  </p>
                </div>
              ))}
            </div>

            {/* Informações do treinamento */}
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Total: {allItemsCount} itens para completar</span>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{pagesData.length} páginas/módulos</span>
              </div>
            </div>

            {/* Botão iniciar */}
            <Button 
              onClick={handleStartTraining} 
              size="lg" 
              className="w-full gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Iniciar Treinamento
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com Timer e Progresso */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-sm">
            Módulo {currentPageIndex + 1} de {pagesData.length}
          </Badge>
          <TrainingTimer isActive={true} />
        </div>
        <div className="w-full sm:w-64">
          <ProgressBar 
            value={overallProgress} 
            label="Progresso Geral"
            showPercentage={true}
          />
        </div>
      </div>

      {/* Checklist Content */}
      <ChecklistSection
        title={currentPage.title}
        subtitle={currentPage.subtitle}
        items={currentPage.items}
        onItemToggle={handleItemToggle}
      />

      {/* Botão Marcar Página como Completa */}
      {!allCurrentPageItemsComplete && (
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                Complete todos os itens ou use o atalho para marcar tudo como completo
              </div>
              <Button 
                onClick={handleMarkPageComplete}
                variant="default"
                className="gap-2"
              >
                <CheckCircle className="h-4 w-4" />
                Marcar Página como Completa
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

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
          disabled={canGoNext ? !allCurrentPageItemsComplete : !allPagesComplete}
          className="gap-2"
        >
          {canGoNext ? `Próximo: Módulo ${currentPageIndex + 2}` : `Concluir Dia ${dayNumber}`}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

