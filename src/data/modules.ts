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
        description: 'Cadastros e Criação de Orçamento',
        content: '',
        pages: [
          {
            id: 'page-1',
            title: '✅ MÓDULO 1 – CADASTROS',
            subtitle: '🔧 Objetivo: Criar os principais registros do sistema para utilizar nas próximas etapas.',
            items: [
              {
                id: 'cadastro-1',
                text: 'Cadastrar um novo <strong>cliente</strong> (utilize seu próprio e-mail para o cadastro)',
                completed: false
              },
              {
                id: 'cadastro-2',
                text: 'Cadastrar um novo <strong>empreiteiro</strong> (utilize seu próprio e-mail)',
                completed: false
              },
              {
                id: 'cadastro-3',
                text: 'Cadastrar um novo <strong>fiscal</strong> (utilize seu próprio e-mail)',
                completed: false
              },
              {
                id: 'cadastro-4',
                text: 'Cadastrar um novo <strong>supervisor</strong> (utilize seu próprio e-mail)',
                completed: false
              },
              {
                id: 'cadastro-5',
                text: 'Cadastrar uma nova <strong>obra</strong> (preencha os campos obrigatórios com os dados criados acima: cliente, empreiteiro, fiscal, supervisor, etc.)',
                completed: false
              },
              {
                id: 'cadastro-6',
                text: 'Cadastrar um novo <strong>BDI</strong> (utilize uma porcentagem fictícia, como 25%)',
                completed: false
              }
            ]
          },
          {
            id: 'page-2',
            title: '✅ MÓDULO 2 – CRIAÇÃO E EDIÇÃO DE ORÇAMENTO',
            subtitle: '📊 Objetivo: Criar um orçamento completo com base em dados cadastrados, aplicar configurações, realizar ajustes, emitir relatórios e explorar recursos adicionais do sistema.',
            items: [
              {
                id: 'orcamento-1',
                text: '<strong>Passo 1 – Iniciar Orçamento</strong><br/>• Versão: Nova versão do orçamento<br/>• Código: 0001 TG<br/>• Descrição: Teste nível 1<br/>• Cliente: selecionar o cadastrado por você<br/>• Categoria: Calçadas e meio-fio<br/>• Licitação: informe um número aleatório',
                completed: false
              },
              {
                id: 'orcamento-2',
                text: '<strong>Passo 2 – Configurações Iniciais</strong><br/>• Arredondamento: Truncar em 2 casas decimais<br/>• BDI: Incidir sobre o preço unitário da composição<br/>• Encargo Social: Desonerado',
                completed: false
              },
              {
                id: 'orcamento-3',
                text: '<strong>Passo 3 – Bases de Dados</strong><br/>• Selecionar: SINAPI, SICRO, SBC<br/>• Estado/Data: São Paulo, 01/2025',
                completed: false
              },
              {
                id: 'orcamento-4',
                text: '<strong>Passo 4 – Inserção de Etapas e Itens</strong><br/>• ETAPA 1: Inserir etapa "SERVIÇOS PRELIMINARES"<br/>• Composições (código): 90000 (SINAPI), 000001 (SBC), 0607137 (SICRO3)<br/>• ETAPA 2: Insumos (código): 00000412 (SINAPI), 000399 (SBC), M2000 (SICRO3)',
                completed: false
              },
              {
                id: 'orcamento-5',
                text: '<strong>Passo 5 – Edições e Ajustes</strong><br/>• Menu EXIBIR > EDITAR<br/>• Lista de Insumos: editar descrição 00000412 para "Insumo Treinamento Guiado"<br/>• Horista/Mensalista: tipo 099034 para Mensalista<br/>• Tipos: insumo E9592 (SICRO) para Equipamento de aquisição permanente<br/>• Índices de reajuste SICRO: E9535 para grupo serviço com aço<br/>• EDITAR PREÇOS > MÃO DE OBRA: insumo 00000378 (SINAPI) para R$ 20,00',
                completed: false
              },
              {
                id: 'orcamento-6',
                text: '<strong>Passo 6 – Relatórios ABC</strong><br/>• Aba RELATÓRIOS<br/>• Download "Curva ABC de Insumos" + explicar com suas próprias palavras<br/>• Download "Curva ABC de Serviços" + explicar com suas próprias palavras',
                completed: false
              },
              {
                id: 'orcamento-7',
                text: '<strong>Passo 7 – Lista de Composições</strong><br/>• EXIBIR > LISTA DE COMPOSIÇÕES<br/>• Menu EDITAR > DESCRIÇÕES: composição 88238 (SINAPI) para "Composição Treinamento Guiado"<br/>• Menu EDITAR > TIPO: selecionar "COBE"',
                completed: false
              },
              {
                id: 'orcamento-8',
                text: '<strong>Passo 8 – Cronograma</strong><br/>• EXIBIR > CRONOGRAMA<br/>• Definir período: 15 dias<br/>• Adicionar: +60 dias<br/>• Retirar: -15 dias<br/>• Ajustar etapas até 100%<br/>• Emitir relatório: Cronograma Físico-Financeiro',
                completed: false
              },
              {
                id: 'orcamento-9',
                text: '<strong>Passo 9 – Editar Orçamento</strong><br/>• Menu EDITAR > ORÇAMENTO<br/>• Código: TG 001 – [Seu Nome]<br/>• Descrição: Treinamento Guiado 001 – [Seu Nome]<br/>• Cliente: o cadastrado<br/>• Arredondamento: Arredondar<br/>• Categoria: Outros<br/>• Máscara: aplicar<br/>• Licitação: Não é licitação',
                completed: false
              },
              {
                id: 'orcamento-10',
                text: '<strong>Passo 10 – Configurar Bancos</strong><br/>• EDITAR > BANCOS<br/>• Selecionar: SINAPI, SICRO, SBC<br/>• Marcar: "Atualizar Estrutura das Composições durante troca de ESTADO ou DATA"<br/>• Arredondamento por base (truncar em 2 para Sinapi/SBC, etc.)',
                completed: false
              },
              {
                id: 'orcamento-11',
                text: '<strong>Passo 11 – Configurações Adicionais</strong><br/>• BDI: Por composição, Manual (25%)<br/>• Encargos Sociais: Horista 10%, Mensalista 20%<br/>• Endereço da obra: usar o da empresa<br/>• Quantidades: definir todas como 10<br/>• BDI diferenciado: 1% em todos<br/>• Observações: colocar seu nome',
                completed: false
              },
              {
                id: 'orcamento-12',
                text: '<strong>Passo 12 – Ferramentas e Relatórios Finais</strong><br/>• Menu FERRAMENTAS: Copiar orçamento, enviar cópia<br/>• Importar do Excel<br/>• Ajustar valor: -10% (somente preços)<br/>• Emitir todos os relatórios<br/>• Criar pasta na área de trabalho com seu nome e salvar relatórios',
                completed: false
              }
            ]
          }
        ]
      },
      {
        id: 'day-2',
        title: 'Dia 2',
        description: 'Base de Preços, Encargos, BDI, Orçamento, Diário de Obras, Planejamento e Medição',
        content: '',
        pages: [
          {
            id: 'page-1',
            title: '✅ MÓDULO 1 – COMPOSIÇÕES E INSUMOS',
            subtitle: '🔧 Objetivo: Criar composições, insumos e encargos sociais para utilizar no sistema.',
            items: [
              {
                id: 'composicao-1',
                text: '<strong>Etapa 1: Criação de Composição</strong><br/>• Navegar até <strong>COMPOSIÇÕES → CRIAR COMPOSIÇÕES</strong><br/>• Preencher campos:<br/>  - Código: TGC + SeuNome<br/>  - Descrição: TGC + SeuNome<br/>  - Tipo: cant / Unidade: UN<br/>  - Estado: São Paulo<br/>  - Setor: Suporte e Treinamento<br/>  - Modelo: SINAPI<br/>  - Marcar: Truncar e Mão de Obra<br/>  - Observação: Seu nome<br/>• Clicar em "Definir Bases" e selecionar as mesmas do primeiro orçamento<br/>• Adicionar insumos com coeficiente 1: SBC 008624, SBC 099807, SINAPI 00020193, SICRO3 A9315',
                completed: false
              },
              {
                id: 'insumo-1',
                text: '<strong>Etapa 2: Criar um Insumo</strong><br/>• Navegar até <strong>INSUMO → CRIAR INSUMO</strong><br/>• Preencher:<br/>  - Código: TGI + SeuNome<br/>  - Descrição: TGI + SeuNome<br/>  - Tipo: Mão de obra<br/>  - Valor Desonerado/Não desonerado: R$ 10,00<br/>  - Unidade: UN / Estado: São Paulo',
                completed: false
              },
              {
                id: 'encargo-1',
                text: '<strong>Etapa 3: Criar Encargos Sociais</strong><br/>• Navegar até <strong>CADASTROS → ENCARGOS SOCIAIS → CRIAR GRUPOS</strong><br/>• Criar Mensalista:<br/>  - Descrição: TGM + SeuNome<br/>  - Estado: São Paulo<br/>  - Data de início: Data atual<br/>  - Data de fim: Um ano após<br/>• Criar Horista:<br/>  - Descrição: TGH + SeuNome<br/>  - Mesmos dados do Mensalista',
                completed: false
              }
            ]
          },
          {
            id: 'page-2',
            title: '✅ MÓDULO 2 – ENCARGOS E BDI',
            subtitle: '📊 Objetivo: Configurar encargos específicos e criar BDI personalizado.',
            items: [
              {
                id: 'encargo-2',
                text: '<strong>Etapa 4: Editar Encargos Específicos</strong><br/>• Editar os seguintes valores:<br/>  - C5 Indenização Adicional → 0,60<br/>  - D2 Reincidência de Grupo A sobre Aviso Prévio Trabalhado e FGTS → 0,60<br/>  - A9 SECONCI → 12,00',
                completed: false
              },
              {
                id: 'bdi-1',
                text: '<strong>Etapa 5: Criar BDI</strong><br/>• Navegar até <strong>CADASTROS → BDI</strong><br/>• Descrição: TGBDI + SeuNome<br/>• Grupo B: 0,90% / Lucro: 0,5%',
                completed: false
              },
              {
                id: 'orcamento-fit-1',
                text: '<strong>Etapa 6: Editar Orçamento e Inserir FIT</strong><br/>• <strong>ORÇAMENTO → LISTA DE ORÇAMENTO</strong> → Selecionar orçamento do Dia 1<br/>• Editar → Inserir FIT<br/>  - % Próximo de centros urbanos: 10<br/>  - VMD (Volume Médio Diário): 20',
                completed: false
              }
            ]
          },
          {
            id: 'page-3',
            title: '✅ MÓDULO 3 – APLICAÇÃO E SINCRONIZAÇÃO',
            subtitle: '⚙️ Objetivo: Aplicar BDI, encargos, DMT e realizar sincronização com bases de dados.',
            items: [
              {
                id: 'aplicacao-1',
                text: '<strong>Etapa 7: Aplicar BDI, Encargo e DMT</strong><br/>• Em "EDITAR" do orçamento:<br/>  - Adicionar o BDI criado<br/>  - Adicionar o Encargo criado<br/>  - Adicionar DMT usando composição SICRO: M2462<br/>  - Distâncias: 10, 20, 30, 40 km',
                completed: false
              },
              {
                id: 'sync-1',
                text: '<strong>Etapa 8: Sincronização e Compatibilização</strong><br/>• Menu Ferramentas → <strong>Sincronizar com Base</strong> (marcar todos os itens)<br/>• <strong>Compatibilização de Base:</strong><br/>  - Banco Principal: SINAPI<br/>  - Substituir SICRO3 E9719 → SINAPI 00013914<br/>  - Substituir SBC 099449 → SINAPI 00000248',
                completed: false
              }
            ]
          },
          {
            id: 'page-4',
            title: '✅ MÓDULO 4 – APLICAÇÕES NO ORÇAMENTO',
            subtitle: '📝 Objetivo: Realizar aplicações avançadas no orçamento (BDI diferenciado, memorial, tagueamento e relatórios).',
            items: [
              {
                id: 'aplicacao-2',
                text: '<strong>Etapa 9: Aplicações no Orçamento</strong><br/>• <strong>BDI Diferenciado:</strong> Editar todos para valor 1<br/>• <strong>Memorial de Cálculo:</strong> Aplicar fórmula i.1.3 * i.1.2<br/>• <strong>Tagueamento:</strong> Aplicar tag "revisar" no primeiro item<br/>• <strong>Gerar Relatório V2:</strong> Marcar todas opções',
                completed: false
              }
            ]
          },
          {
            id: 'page-5',
            title: '✅ MÓDULO 5 – DIÁRIO DE OBRAS E PLANEJAMENTO',
            subtitle: '📅 Objetivo: Criar diário de obras e planejamento com medições.',
            items: [
              {
                id: 'diario-1',
                text: '<strong>Etapa 10: Diário de Obras</strong><br/>• <strong>DIARIO DE OBRAS → CRIAR DIARIO</strong><br/>• Descrição: TESTE GUIADO [SEUNOME] Nível 1<br/>• Obra: Selecionar do Dia 1<br/>• Data: Data do treinamento<br/>• Comentário: TESTE GUIADO [SEUNOME] Nível 1<br/>• Adicionar imagem, clima, condição, horário<br/>• Selecionar tarefa do orçamento e adicionar ocorrência',
                completed: false
              },
              {
                id: 'planejamento-1',
                text: '<strong>Etapa 11: Planejamento e Medição</strong><br/>• <strong>PLANEJAMENTO → CRIAR PLANEJAMENTO</strong><br/>  - Descrição: Nível 1 TESTE GUIADO [SEUNOME]<br/>  - Data de início: Hoje / Jornada: 8h + 2h extra<br/>  - Marcar: Inicializar com dados do orçamento, habilitar sugestão de duração<br/>  - Ativar 2 primeiras produções de equipe<br/>• <strong>MEDIÇÃO → CRIAR MEDIÇÃO</strong><br/>  - Data primeira medição: Hoje / Segunda: Um mês depois<br/>  - Inserir quantidades menores ou iguais ao orçado',
                completed: false
              }
            ]
          }
        ]
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
