import { Module } from '@/types/training';

export const modules: Module[] = [
  {
    id: '1',
    title: 'Treinamento Guiado Nível 1',
    description: 'Treinamento completo dividido em 3 dias',
    duration: '3 dias',
    content: `
      <div class="space-y-4">
        <p class="text-muted-foreground">Este módulo contém um treinamento guiado dividido em 3 dias.</p>
      </div>
    `,
    days: [
      {
        id: 'day-1',
        title: 'Dia 1',
        description: 'Introdução e primeiros passos',
        content: '<p>Conteúdo do Dia 1 a ser definido.</p>',
        exercises: '<p>Exercícios práticos do Dia 1 a ser definido.</p>'
      },
      {
        id: 'day-2',
        title: 'Dia 2',
        description: 'Desenvolvimento e prática',
        content: '<p>Conteúdo do Dia 2 a ser definido.</p>',
        exercises: '<p>Exercícios práticos do Dia 2 a ser definido.</p>'
      },
      {
        id: 'day-3',
        title: 'Dia 3',
        description: 'Conclusão e avaliação',
        content: '<p>Conteúdo do Dia 3 a ser definido.</p>',
        exercises: '<p>Exercícios práticos do Dia 3 a ser definido.</p>'
      }
    ],
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: []
    }
  },
  {
    id: '2',
    title: 'Treinamento Guiado Nível 2',
    description: '',
    duration: 'A definir',
    content: `
      <div class="space-y-4">
        <p class="text-muted-foreground">Conteúdo do módulo em desenvolvimento.</p>
      </div>
    `,
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: []
    }
  },
  {
    id: '3',
    title: 'Treinamento Guiado Nível 3',
    description: '',
    duration: 'A definir',
    content: `
      <div class="space-y-4">
        <p class="text-muted-foreground">Conteúdo do módulo em desenvolvimento.</p>
      </div>
    `,
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: []
    }
  }
];
