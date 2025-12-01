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
        description: 'Base de Preços, Encargos, BDI e Orçamento',
        content: '',
        pages: [
          {
            id: 'page-1',
            title: '✅ MÓDULO 1 – CRIAÇÃO DE COMPOSIÇÃO',
            subtitle: '🎯 Objetivo: Criar uma nova composição personalizada no sistema.',
            items: [
              {
                id: 'composicao-1',
                text: 'Acessar menu lateral esquerdo: <strong>COMPOSIÇÕES → CRIAR COMPOSIÇÕES</strong>',
                completed: false
              },
              {
                id: 'composicao-2',
                text: 'Preencher campos:<br/>• Código: <strong>TGCSeuNome</strong> (exemplo: TGCElisa)<br/>• Descrição: <strong>TGCSeuNome</strong><br/>• Tipo: <strong>cant</strong><br/>• Unidade: <strong>UN</strong><br/>• Estado: <strong>São Paulo</strong><br/>• Setor: <strong>Suporte e Treinamento</strong><br/>• Modelo: <strong>SINAPI</strong>',
                completed: false
              },
              {
                id: 'composicao-3',
                text: 'Marcar opções: <strong>Truncar</strong> e <strong>Mão de Obra</strong>',
                completed: false
              },
              {
                id: 'composicao-4',
                text: 'Observação: Adicionar <strong>seu nome</strong>',
                completed: false
              },
              {
                id: 'composicao-5',
                text: 'Clicar em <strong>"Definir Bases"</strong> e selecionar as mesmas do primeiro orçamento',
                completed: false
              },
              {
                id: 'composicao-6',
                text: 'Adicionar insumos com <strong>coeficiente 1</strong>:<br/>• SBC 008624<br/>• SBC 099807<br/>• SINAPI 00020193<br/>• SICRO3 A9315',
                completed: false
              }
            ]
          },
          {
            id: 'page-2',
            title: '✅ MÓDULO 2 – CRIAR UM INSUMO',
            subtitle: '🔧 Objetivo: Cadastrar um novo insumo personalizado no sistema.',
            items: [
              {
                id: 'insumo-1',
                text: 'Menu lateral esquerdo: <strong>INSUMO → CRIAR INSUMO</strong>',
                completed: false
              },
              {
                id: 'insumo-2',
                text: 'Preencher campos:<br/>• Código: <strong>TGISeuNome</strong> (exemplo: TGIElisa)<br/>• Descrição: <strong>TGISeuNome</strong><br/>• Tipo: <strong>Mão de obra</strong><br/>• Valor Desonerado/Não desonerado: <strong>R$ 10,00</strong><br/>• Unidade: <strong>UN</strong><br/>• Estado: <strong>São Paulo</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-3',
            title: '✅ MÓDULO 3 – CRIAR ENCARGOS',
            subtitle: '📊 Objetivo: Configurar grupos de encargos sociais para Mensalista e Horista.',
            items: [
              {
                id: 'encargos-1',
                text: 'Menu lateral esquerdo: <strong>CADASTROS → ENCARGOS SOCIAIS → CRIAR GRUPOS</strong>',
                completed: false
              },
              {
                id: 'encargos-2',
                text: 'Criar Mensalista:<br/>• Descrição: <strong>TGMSeuNome</strong><br/>• Estado: <strong>São Paulo</strong><br/>• Data início: <strong>Data atual</strong><br/>• Data fim: <strong>Um ano após a data atual</strong>',
                completed: false
              },
              {
                id: 'encargos-3',
                text: 'Criar Horista:<br/>• Descrição: <strong>TGHSeuNome</strong><br/>• Usar os mesmos dados do Mensalista',
                completed: false
              },
              {
                id: 'encargos-4',
                text: 'Editar encargos criados:<br/>• C5 Indenização Adicional: <strong>0,60</strong><br/>• D2 Reincidência de Grupo A: <strong>0,60</strong><br/>• A9 SECONCI: <strong>12,00</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-4',
            title: '✅ MÓDULO 4 – CRIAR BDI',
            subtitle: '💰 Objetivo: Cadastrar um novo BDI (Benefícios e Despesas Indiretas).',
            items: [
              {
                id: 'bdi-1',
                text: 'Menu lateral esquerdo: <strong>CADASTROS → BDI</strong>',
                completed: false
              },
              {
                id: 'bdi-2',
                text: 'Preencher campos:<br/>• Descrição: <strong>TGBDISeuNome</strong><br/>• Grupo B: <strong>0,90%</strong><br/>• Lucro: <strong>0,5%</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-5',
            title: '✅ MÓDULO 5 – EDITAR ORÇAMENTO E INSERIR FIT',
            subtitle: '📝 Objetivo: Editar o orçamento criado no Dia 1 e inserir dados do FIT.',
            items: [
              {
                id: 'fit-1',
                text: 'Menu lateral esquerdo: <strong>ORÇAMENTO → LISTA DE ORÇAMENTO</strong>',
                completed: false
              },
              {
                id: 'fit-2',
                text: 'Selecionar o <strong>primeiro orçamento criado no DIA 1</strong>',
                completed: false
              },
              {
                id: 'fit-3',
                text: 'Clicar em <strong>Editar → Inserir FIT</strong>',
                completed: false
              },
              {
                id: 'fit-4',
                text: 'Preencher campos FIT:<br/>• % Próximo de centros urbanos: <strong>10</strong><br/>• VMD - Volume Médio Diário: <strong>20</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-6',
            title: '✅ MÓDULO 6 – APLICAR BDI, ENCARGO E DMT',
            subtitle: '⚙️ Objetivo: Adicionar BDI, Encargos e DMT ao orçamento.',
            items: [
              {
                id: 'aplicar-1',
                text: 'Em <strong>EDITAR</strong>: Adicionar o <strong>BDI criado</strong> anteriormente',
                completed: false
              },
              {
                id: 'aplicar-2',
                text: 'Adicionar o <strong>Encargo criado</strong> anteriormente',
                completed: false
              },
              {
                id: 'aplicar-3',
                text: 'Adicionar <strong>DMT</strong> usando composição <strong>SICRO M2462</strong>',
                completed: false
              },
              {
                id: 'aplicar-4',
                text: 'Definir distâncias: <strong>10, 20, 30, 40 km</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-7',
            title: '✅ MÓDULO 7 – SINCRONIZAÇÃO E COMPATIBILIZAÇÃO',
            subtitle: '🔄 Objetivo: Sincronizar e compatibilizar bases de dados do orçamento.',
            items: [
              {
                id: 'sync-1',
                text: 'Acessar menu <strong>Ferramentas</strong>',
                completed: false
              },
              {
                id: 'sync-2',
                text: '<strong>Sincronizar com Base</strong>: Marcar todos os itens disponíveis',
                completed: false
              },
              {
                id: 'sync-3',
                text: '<strong>Compatibilização de Base</strong>:<br/>• Banco Principal: <strong>SINAPI</strong>',
                completed: false
              },
              {
                id: 'sync-4',
                text: 'Substituir insumo <strong>SICRO3 E9719</strong> → <strong>SINAPI 00013914</strong>',
                completed: false
              },
              {
                id: 'sync-5',
                text: 'Substituir <strong>SBC 099449</strong> → <strong>SINAPI 00013914</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-8',
            title: '✅ MÓDULO 8 – APLICAÇÕES NO ORÇAMENTO',
            subtitle: '🎨 Objetivo: Aplicar configurações avançadas e gerar relatórios.',
            items: [
              {
                id: 'app-1',
                text: '<strong>BDI Diferenciado</strong>: Editar todos os itens para aplicar valor <strong>1</strong> em todos',
                completed: false
              },
              {
                id: 'app-2',
                text: '<strong>Memorial de Cálculo</strong>: Aplicar fórmula <strong>i.1.3 * i.1.2</strong>',
                completed: false
              },
              {
                id: 'app-3',
                text: '<strong>Tagueamento de Item</strong>: Passar mouse sobre primeiro item e aplicar tag <strong>"revisar"</strong>',
                completed: false
              },
              {
                id: 'app-4',
                text: '<strong>Gerar Relatório V2</strong>: Marcar todas as opções disponíveis e gerar',
                completed: false
              }
            ]
          },
          {
            id: 'page-9',
            title: '✅ MÓDULO 9 – DIÁRIO DE OBRAS',
            subtitle: '📔 Objetivo: Criar e preencher um diário de obras completo.',
            items: [
              {
                id: 'diario-1',
                text: 'Menu lateral esquerdo: <strong>DIÁRIO DE OBRAS → CRIAR DIÁRIO</strong>',
                completed: false
              },
              {
                id: 'diario-2',
                text: 'Descrição: <strong>TESTE GUIADO SEUNOME Nível 1</strong>',
                completed: false
              },
              {
                id: 'diario-3',
                text: 'Obra: Selecionar a <strong>obra criada no Dia 1</strong>',
                completed: false
              },
              {
                id: 'diario-4',
                text: 'Data: <strong>Data do treinamento</strong>',
                completed: false
              },
              {
                id: 'diario-5',
                text: 'Desmarcar opção: <strong>"Copiar informações do último relatório"</strong>',
                completed: false
              },
              {
                id: 'diario-6',
                text: 'Comentário: <strong>TESTE GUIADO SEUNOME Nível 1</strong>',
                completed: false
              },
              {
                id: 'diario-7',
                text: 'Imagem: <strong>Adicionar nova imagem</strong> (fazer print da tela)',
                completed: false
              },
              {
                id: 'diario-8',
                text: 'Preencher: <strong>Clima, Condição, Horário</strong>',
                completed: false
              },
              {
                id: 'diario-9',
                text: 'Selecionar uma <strong>Tarefa do orçamento</strong>',
                completed: false
              },
              {
                id: 'diario-10',
                text: 'Adicionar <strong>Ocorrência</strong> (à sua escolha)',
                completed: false
              },
              {
                id: 'diario-11',
                text: 'Observação: <strong>TESTE GUIADO SEUNOME</strong>',
                completed: false
              }
            ]
          },
          {
            id: 'page-10',
            title: '✅ MÓDULO 10 – PLANEJAMENTO',
            subtitle: '📅 Objetivo: Criar um planejamento de obra completo.',
            items: [
              {
                id: 'plan-1',
                text: 'Menu lateral esquerdo: <strong>Planejamento → Criar planejamento</strong>',
                completed: false
              },
              {
                id: 'plan-2',
                text: 'Descrição: <strong>Nível 1 TESTE GUIADO SEUNOME</strong>',
                completed: false
              },
              {
                id: 'plan-3',
                text: 'Obra: Selecionar a <strong>obra do Dia 1</strong>',
                completed: false
              },
              {
                id: 'plan-4',
                text: 'Data de início: <strong>Hoje</strong>',
                completed: false
              },
              {
                id: 'plan-5',
                text: 'Jornada: <strong>8h + 2h extra</strong>',
                completed: false
              },
              {
                id: 'plan-6',
                text: 'Marcar opções:<br/>• <strong>Inicializar com dados do orçamento</strong><br/>• <strong>Habilitar sugestão de duração</strong>',
                completed: false
              },
              {
                id: 'plan-7',
                text: 'Selecionar apenas: <strong>Mão de Obra</strong> e <strong>Material</strong>',
                completed: false
              },
              {
                id: 'plan-8',
                text: 'Ativar <strong>2 primeiras produções de equipe</strong> de cada etapa',
                completed: false
              }
            ]
          },
          {
            id: 'page-11',
            title: '✅ MÓDULO 11 – MEDIÇÃO',
            subtitle: '📏 Objetivo: Criar e configurar medições do orçamento.',
            items: [
              {
                id: 'medicao-1',
                text: 'Menu lateral esquerdo: <strong>MEDIÇÃO → CRIAR MEDIÇÃO</strong>',
                completed: false
              },
              {
                id: 'medicao-2',
                text: 'Descrição: <strong>Nível 1 TESTE GUIADO SEUNOME</strong>',
                completed: false
              },
              {
                id: 'medicao-3',
                text: 'Orçamento: Selecionar o <strong>orçamento do Dia 1</strong>',
                completed: false
              },
              {
                id: 'medicao-4',
                text: 'Data da primeira medição: <strong>Hoje</strong>',
                completed: false
              },
              {
                id: 'medicao-5',
                text: 'Adicionar mais uma medição: <strong>Um mês depois</strong>',
                completed: false
              },
              {
                id: 'medicao-6',
                text: 'Inserir Quantidades:<br/>• Clicar em <strong>"Quant."</strong> na linha da primeira composição<br/>• Adicionar valor <strong>menor ou igual ao orçado</strong><br/>• Pressionar <strong>Enter</strong> para salvar',
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
