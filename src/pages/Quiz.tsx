import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '@/data/modules';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

const Quiz = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const module = modules.find(m => m.id === moduleId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <p>Módulo não encontrado</p>
        <Button onClick={() => navigate('/training')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Treinamentos
        </Button>
      </div>
    );
  }

  const questions = module.quiz.questions;

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => navigate('/training')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>{module.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Este módulo está em desenvolvimento. O conteúdo e quiz serão adicionados em breve.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: 'Selecione uma resposta',
        description: 'Você precisa selecionar uma opção antes de continuar.',
        variant: 'destructive',
      });
      return;
    }

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const correctAnswers = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const score = Math.round((correctAnswers / questions.length) * 100);
    const passed = score >= module.quiz.passingScore;

    setQuizFinished(true);
    
    toast({
      title: passed ? 'Parabéns!' : 'Não foi dessa vez',
      description: passed 
        ? `Você foi aprovado com ${score}%!` 
        : `Sua nota foi ${score}%. Você precisa de ${module.quiz.passingScore}% para passar.`,
      variant: passed ? 'default' : 'destructive',
    });
  };

  const calculateFinalScore = () => {
    const correctAnswers = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    return Math.round((correctAnswers / questions.length) * 100);
  };

  if (quizFinished) {
    const score = calculateFinalScore();
    const passed = score >= module.quiz.passingScore;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {passed ? (
                <CheckCircle2 className="h-6 w-6 text-success" />
              ) : (
                <XCircle className="h-6 w-6 text-destructive" />
              )}
              {passed ? 'Aprovado!' : 'Não Aprovado'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="text-5xl font-bold mb-2">{score}%</div>
              <p className="text-muted-foreground">
                Você acertou {answers.filter((a, i) => a === questions[i].correctAnswer).length} de {questions.length} questões
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/training')}
                className="flex-1"
              >
                Voltar aos Treinamentos
              </Button>
              {!passed && (
                <Button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers([]);
                    setSelectedAnswer(null);
                    setShowResult(false);
                    setQuizFinished(false);
                  }}
                  className="flex-1"
                >
                  Tentar Novamente
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate(`/module/${moduleId}`)}
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Button>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Questão {currentQuestion + 1} de {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
            disabled={showResult}
          >
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer;
              const isSelected = index === selectedAnswer;
              const showCorrectness = showResult && (isSelected || isCorrect);

              return (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-4 rounded-lg border ${
                    showCorrectness
                      ? isCorrect
                        ? 'bg-success/10 border-success'
                        : isSelected
                        ? 'bg-destructive/10 border-destructive'
                        : ''
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                  {showCorrectness && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                  {showCorrectness && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              );
            })}
          </RadioGroup>

          {showResult && (
            <div className="p-4 rounded-lg bg-muted">
              <p className="font-semibold mb-2">Explicação:</p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}

          <div className="flex gap-4">
            {!showResult ? (
              <Button onClick={handleAnswer} className="w-full">
                Confirmar Resposta
              </Button>
            ) : (
              <Button onClick={handleNext} className="w-full">
                {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Quiz'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
