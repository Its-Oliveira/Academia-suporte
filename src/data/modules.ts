import { Module } from '@/types/training';

export const modules: Module[] = [
  {
    id: 'mod-1',
    title: 'Importação de Planilha de Orçamento',
    level: 1,
    description: 'Aprenda a importar planilhas de orçamento corretamente na plataforma',
    duration: '30 min',
    content: `
      <h2>Formatos Aceitos pela Plataforma</h2>
      <p>A plataforma aceita os seguintes formatos de arquivo:</p>
      <ul>
        <li>Excel (.xlsx, .xls)</li>
        <li>CSV (.csv)</li>
        <li>LibreOffice Calc (.ods)</li>
      </ul>

      <h2>Preparação da Planilha Antes da Importação</h2>
      <p>Antes de importar sua planilha, certifique-se de:</p>
      <ol>
        <li><strong>Verificar a estrutura:</strong> A primeira linha deve conter os cabeçalhos (Item, Descrição, Unidade, Quantidade, Preço Unitário, Total)</li>
        <li><strong>Formato de números:</strong> Utilize ponto (.) como separador decimal, não vírgula</li>
        <li><strong>Remover formatações especiais:</strong> Evite células mescladas, cores ou fórmulas complexas</li>
        <li><strong>Verificar dados obrigatórios:</strong> Todos os campos essenciais devem estar preenchidos</li>
      </ol>

      <h2>Passo a Passo do Processo de Importação</h2>
      <ol>
        <li>Acesse o menu "Orçamentos" no painel lateral</li>
        <li>Clique no botão "Importar Planilha"</li>
        <li>Selecione o arquivo de sua planilha</li>
        <li>Aguarde o processamento e validação</li>
        <li>Revise os dados importados na pré-visualização</li>
        <li>Confirme a importação clicando em "Finalizar Importação"</li>
      </ol>

      <h2>Erros Comuns e Como Resolvê-los</h2>
      <table>
        <tr>
          <th>Erro</th>
          <th>Causa</th>
          <th>Solução</th>
        </tr>
        <tr>
          <td>Formato inválido</td>
          <td>Arquivo não está em formato suportado</td>
          <td>Converta para .xlsx ou .csv</td>
        </tr>
        <tr>
          <td>Cabeçalhos não encontrados</td>
          <td>Primeira linha sem nomes de colunas</td>
          <td>Adicione cabeçalhos na primeira linha</td>
        </tr>
        <tr>
          <td>Valores numéricos inválidos</td>
          <td>Uso de vírgula ao invés de ponto</td>
          <td>Substitua vírgulas por pontos</td>
        </tr>
        <tr>
          <td>Campos obrigatórios vazios</td>
          <td>Dados essenciais faltando</td>
          <td>Preencha todos os campos obrigatórios</td>
        </tr>
      </table>
    `,
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: [
        {
          id: 'q1-1',
          question: 'Quais formatos de arquivo são aceitos pela plataforma?',
          options: [
            'Apenas .xlsx',
            '.xlsx, .xls, .csv e .ods',
            'Apenas .csv',
            '.pdf e .docx'
          ],
          correctAnswer: 1,
          explanation: 'A plataforma aceita múltiplos formatos: Excel (.xlsx, .xls), CSV (.csv) e LibreOffice Calc (.ods).'
        },
        {
          id: 'q1-2',
          question: 'Qual deve ser o separador decimal utilizado na planilha?',
          options: [
            'Vírgula (,)',
            'Ponto e vírgula (;)',
            'Ponto (.)',
            'Espaço ( )'
          ],
          correctAnswer: 2,
          explanation: 'O sistema utiliza o padrão internacional com ponto (.) como separador decimal.'
        },
        {
          id: 'q1-3',
          question: 'O que deve conter a primeira linha da planilha?',
          options: [
            'Os dados do primeiro item',
            'Os cabeçalhos das colunas',
            'O título do orçamento',
            'Pode estar vazia'
          ],
          correctAnswer: 1,
          explanation: 'A primeira linha deve sempre conter os cabeçalhos para identificar as colunas corretamente.'
        },
        {
          id: 'q1-4',
          question: 'Qual tipo de formatação deve ser evitada na planilha?',
          options: [
            'Texto em negrito',
            'Alinhamento centralizado',
            'Células mescladas',
            'Fonte Arial'
          ],
          correctAnswer: 2,
          explanation: 'Células mescladas podem causar problemas na importação e devem ser evitadas.'
        },
        {
          id: 'q1-5',
          question: 'Qual é o primeiro passo para importar uma planilha?',
          options: [
            'Enviar por email',
            'Acessar o menu Orçamentos',
            'Fazer download de um modelo',
            'Criar um novo projeto'
          ],
          correctAnswer: 1,
          explanation: 'O processo começa acessando o menu "Orçamentos" no painel lateral.'
        },
        {
          id: 'q1-6',
          question: 'O que acontece após selecionar o arquivo?',
          options: [
            'É importado imediatamente',
            'É enviado por email',
            'Passa por processamento e validação',
            'Nada acontece'
          ],
          correctAnswer: 2,
          explanation: 'O sistema precisa processar e validar os dados antes de permitir a importação.'
        },
        {
          id: 'q1-7',
          question: 'Se aparecer o erro "Formato inválido", o que fazer?',
          options: [
            'Tentar novamente',
            'Converter para formato suportado',
            'Entrar em contato com suporte',
            'Desistir da importação'
          ],
          correctAnswer: 1,
          explanation: 'O arquivo deve ser convertido para um formato aceito (.xlsx, .xls, .csv ou .ods).'
        },
        {
          id: 'q1-8',
          question: 'Como resolver o erro "Valores numéricos inválidos"?',
          options: [
            'Apagar os valores',
            'Substituir vírgulas por pontos',
            'Arredondar os números',
            'Usar apenas números inteiros'
          ],
          correctAnswer: 1,
          explanation: 'Valores com vírgula devem ser substituídos por ponto (.) para serem reconhecidos corretamente.'
        },
        {
          id: 'q1-9',
          question: 'Quantas etapas existem no processo de importação?',
          options: [
            '3 etapas',
            '4 etapas',
            '6 etapas',
            '10 etapas'
          ],
          correctAnswer: 2,
          explanation: 'O processo tem 6 etapas: acessar menu, clicar importar, selecionar arquivo, aguardar processamento, revisar e confirmar.'
        },
        {
          id: 'q1-10',
          question: 'O que fazer antes de confirmar a importação?',
          options: [
            'Fechar a planilha original',
            'Revisar os dados na pré-visualização',
            'Reiniciar o computador',
            'Fazer backup'
          ],
          correctAnswer: 1,
          explanation: 'É essencial revisar os dados na pré-visualização para garantir que tudo foi importado corretamente.'
        }
      ]
    }
  },
  {
    id: 'mod-2',
    title: 'Como Criar uma Composição',
    level: 1,
    description: 'Entenda o que são composições e aprenda a criá-las na plataforma',
    duration: '35 min',
    content: `
      <h2>O que é uma Composição de Orçamento</h2>
      <p>Uma composição é um conjunto de insumos (materiais, mão de obra e equipamentos) necessários para realizar uma atividade ou serviço específico. Por exemplo, uma composição para "Alvenaria de Tijolo Cerâmico" inclui tijolos, cimento, areia, pedreiro e ajudante.</p>

      <h2>Estrutura de Composições</h2>
      <p>Toda composição é formada por:</p>
      <ul>
        <li><strong>Código:</strong> Identificador único da composição</li>
        <li><strong>Descrição:</strong> Nome detalhado do serviço</li>
        <li><strong>Unidade:</strong> Medida de referência (m², m³, unidade, etc.)</li>
        <li><strong>Insumos:</strong> Lista de materiais e serviços necessários</li>
        <li><strong>Quantidades:</strong> Quantidade de cada insumo por unidade</li>
        <li><strong>Custos:</strong> Preço unitário e total de cada insumo</li>
      </ul>

      <h2>Passo a Passo de Criação na Plataforma</h2>
      <ol>
        <li><strong>Acesse Composições:</strong> No menu lateral, clique em "Composições"</li>
        <li><strong>Nova Composição:</strong> Clique no botão "+ Nova Composição"</li>
        <li><strong>Dados Básicos:</strong> Preencha código, descrição e unidade</li>
        <li><strong>Adicionar Insumos:</strong> Clique em "Adicionar Insumo" e busque na base</li>
        <li><strong>Definir Quantidades:</strong> Insira a quantidade necessária de cada insumo</li>
        <li><strong>Conferir Valores:</strong> Verifique o custo total calculado automaticamente</li>
        <li><strong>Salvar:</strong> Clique em "Salvar Composição"</li>
      </ol>

      <h2>Boas Práticas</h2>
      <ul>
        <li>Use códigos padronizados (ex: SINAPI, SICRO)</li>
        <li>Descrições claras e completas</li>
        <li>Sempre confira as quantidades antes de salvar</li>
        <li>Mantenha as composições atualizadas com preços vigentes</li>
        <li>Agrupe composições similares para facilitar busca</li>
      </ul>

      <h2>Exemplos Reais</h2>
      <p><strong>Exemplo 1: Alvenaria de Tijolo Cerâmico (m²)</strong></p>
      <ul>
        <li>Tijolo cerâmico furado: 14 unidades</li>
        <li>Argamassa mista: 0,012 m³</li>
        <li>Pedreiro: 0,5 h</li>
        <li>Servente: 0,5 h</li>
      </ul>

      <p><strong>Exemplo 2: Pintura Látex em Parede (m²)</strong></p>
      <ul>
        <li>Tinta látex: 0,25 L</li>
        <li>Massa corrida: 0,5 kg</li>
        <li>Pintor: 0,3 h</li>
      </ul>
    `,
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: [
        {
          id: 'q2-1',
          question: 'O que é uma composição de orçamento?',
          options: [
            'Uma planilha de custos',
            'Um conjunto de insumos para realizar uma atividade',
            'Um relatório financeiro',
            'Um tipo de orçamento'
          ],
          correctAnswer: 1,
          explanation: 'Composição é o conjunto de insumos necessários para executar uma atividade ou serviço específico.'
        },
        {
          id: 'q2-2',
          question: 'Quais elementos NÃO fazem parte da estrutura de uma composição?',
          options: [
            'Código e descrição',
            'Unidade de medida',
            'Data de pagamento',
            'Lista de insumos'
          ],
          correctAnswer: 2,
          explanation: 'Data de pagamento não faz parte da estrutura de uma composição. Os elementos essenciais são: código, descrição, unidade, insumos, quantidades e custos.'
        },
        {
          id: 'q2-3',
          question: 'Qual é o primeiro passo para criar uma composição?',
          options: [
            'Adicionar insumos',
            'Salvar a composição',
            'Acessar o menu Composições',
            'Calcular custos'
          ],
          correctAnswer: 2,
          explanation: 'O processo começa acessando o menu "Composições" no painel lateral.'
        },
        {
          id: 'q2-4',
          question: 'Após preencher os dados básicos, o que deve ser feito?',
          options: [
            'Salvar imediatamente',
            'Adicionar insumos',
            'Imprimir a composição',
            'Exportar para PDF'
          ],
          correctAnswer: 1,
          explanation: 'Após preencher código, descrição e unidade, o próximo passo é adicionar os insumos necessários.'
        },
        {
          id: 'q2-5',
          question: 'Como o custo total da composição é calculado?',
          options: [
            'Manualmente pelo usuário',
            'Automaticamente pelo sistema',
            'Por uma calculadora externa',
            'Não é calculado'
          ],
          correctAnswer: 1,
          explanation: 'O sistema calcula automaticamente o custo total com base nos insumos e suas quantidades.'
        },
        {
          id: 'q2-6',
          question: 'Qual tipo de código é recomendado usar?',
          options: [
            'Qualquer código aleatório',
            'Códigos padronizados (SINAPI, SICRO)',
            'Apenas números',
            'Não precisa usar código'
          ],
          correctAnswer: 1,
          explanation: 'É recomendado usar códigos padronizados como SINAPI ou SICRO para manter uniformidade.'
        },
        {
          id: 'q2-7',
          question: 'Na composição "Alvenaria de Tijolo", quantos tijolos são necessários por m²?',
          options: [
            '8 unidades',
            '14 unidades',
            '20 unidades',
            '25 unidades'
          ],
          correctAnswer: 1,
          explanation: 'Conforme o exemplo apresentado, são necessários 14 tijolos cerâmicos furados por m².'
        },
        {
          id: 'q2-8',
          question: 'Qual unidade de medida é usada para pintura?',
          options: [
            'm (metro linear)',
            'm³ (metro cúbico)',
            'm² (metro quadrado)',
            'kg (quilograma)'
          ],
          correctAnswer: 2,
          explanation: 'Pintura é medida em m² (metro quadrado) pois se refere à área pintada.'
        },
        {
          id: 'q2-9',
          question: 'Qual NÃO é uma boa prática ao criar composições?',
          options: [
            'Usar descrições claras',
            'Deixar quantidades zeradas',
            'Usar códigos padronizados',
            'Manter preços atualizados'
          ],
          correctAnswer: 1,
          explanation: 'Deixar quantidades zeradas não é uma boa prática. Todas as quantidades devem ser preenchidas corretamente.'
        },
        {
          id: 'q2-10',
          question: 'Quantas horas de pedreiro são necessárias para 1m² de alvenaria no exemplo?',
          options: [
            '0,3 h',
            '0,5 h',
            '1,0 h',
            '2,0 h'
          ],
          correctAnswer: 1,
          explanation: 'Conforme o exemplo, são necessárias 0,5 horas de pedreiro por m² de alvenaria.'
        }
      ]
    }
  },
  {
    id: 'mod-3',
    title: 'Como Criar um Insumo',
    level: 1,
    description: 'Aprenda a cadastrar e gerenciar insumos na plataforma',
    duration: '25 min',
    content: `
      <h2>Tipos de Insumos</h2>
      <p>Os insumos são classificados em três categorias principais:</p>
      <ul>
        <li><strong>Material:</strong> Itens físicos consumidos na obra (cimento, tijolos, tinta, etc.)</li>
        <li><strong>Mão de Obra:</strong> Trabalho humano necessário (pedreiro, eletricista, pintor, etc.)</li>
        <li><strong>Equipamento:</strong> Máquinas e ferramentas utilizadas (betoneira, andaime, etc.)</li>
      </ul>

      <h2>Campos Obrigatórios e Opcionais</h2>
      <p><strong>Campos Obrigatórios:</strong></p>
      <ul>
        <li>Código do insumo</li>
        <li>Descrição completa</li>
        <li>Tipo (Material/Mão de Obra/Equipamento)</li>
        <li>Unidade de medida</li>
        <li>Preço unitário</li>
      </ul>

      <p><strong>Campos Opcionais:</strong></p>
      <ul>
        <li>Fabricante ou fornecedor</li>
        <li>Código de referência alternativo</li>
        <li>Observações técnicas</li>
        <li>Data da última atualização de preço</li>
      </ul>

      <h2>Cadastro Passo a Passo</h2>
      <ol>
        <li><strong>Acessar Insumos:</strong> No menu lateral, clique em "Insumos"</li>
        <li><strong>Novo Insumo:</strong> Clique no botão "+ Novo Insumo"</li>
        <li><strong>Selecionar Tipo:</strong> Escolha entre Material, Mão de Obra ou Equipamento</li>
        <li><strong>Preencher Código:</strong> Insira um código único para identificação</li>
        <li><strong>Descrição:</strong> Digite uma descrição clara e completa</li>
        <li><strong>Unidade:</strong> Selecione a unidade de medida adequada</li>
        <li><strong>Preço:</strong> Informe o valor unitário atual</li>
        <li><strong>Dados Complementares:</strong> Preencha campos opcionais se necessário</li>
        <li><strong>Salvar:</strong> Clique em "Salvar Insumo"</li>
      </ol>

      <h2>Unidades de Medida Comuns</h2>
      <table>
        <tr>
          <th>Tipo</th>
          <th>Unidades Comuns</th>
        </tr>
        <tr>
          <td>Material</td>
          <td>kg, ton, m, m², m³, L, un, saco</td>
        </tr>
        <tr>
          <td>Mão de Obra</td>
          <td>h (hora), dia, mês</td>
        </tr>
        <tr>
          <td>Equipamento</td>
          <td>h (hora), dia, mês</td>
        </tr>
      </table>

      <h2>Vinculação com Composições</h2>
      <p>Após cadastrar um insumo, ele estará disponível para uso em composições. Para vincular:</p>
      <ol>
        <li>Abra uma composição existente ou crie uma nova</li>
        <li>Clique em "Adicionar Insumo"</li>
        <li>Busque pelo código ou descrição</li>
        <li>Selecione o insumo e defina a quantidade</li>
        <li>O valor será calculado automaticamente</li>
      </ol>

      <h2>Dicas Importantes</h2>
      <ul>
        <li>Mantenha uma nomenclatura padronizada para facilitar buscas</li>
        <li>Atualize preços periodicamente</li>
        <li>Use códigos de referência (ex: SINAPI) quando disponíveis</li>
        <li>Evite duplicatas verificando antes de cadastrar</li>
        <li>Descrições detalhadas evitam confusões futuras</li>
      </ul>
    `,
    quiz: {
      passingScore: 70,
      maxAttempts: 3,
      questions: [
        {
          id: 'q3-1',
          question: 'Quais são os três tipos principais de insumos?',
          options: [
            'Pequeno, Médio e Grande',
            'Material, Mão de Obra e Equipamento',
            'Básico, Intermediário e Avançado',
            'Nacional, Importado e Regional'
          ],
          correctAnswer: 1,
          explanation: 'Os insumos são classificados em Material, Mão de Obra e Equipamento.'
        },
        {
          id: 'q3-2',
          question: 'Qual item NÃO é um campo obrigatório no cadastro de insumo?',
          options: [
            'Código do insumo',
            'Descrição completa',
            'Fabricante ou fornecedor',
            'Preço unitário'
          ],
          correctAnswer: 2,
          explanation: 'Fabricante ou fornecedor é um campo opcional. Os obrigatórios são: código, descrição, tipo, unidade e preço.'
        },
        {
          id: 'q3-3',
          question: 'Onde é feito o cadastro de novos insumos?',
          options: [
            'No menu Composições',
            'No menu Orçamentos',
            'No menu Insumos',
            'No menu Relatórios'
          ],
          correctAnswer: 2,
          explanation: 'O cadastro de insumos é realizado no menu "Insumos" do painel lateral.'
        },
        {
          id: 'q3-4',
          question: 'Qual é o primeiro passo após clicar em "Novo Insumo"?',
          options: [
            'Preencher o preço',
            'Salvar o insumo',
            'Selecionar o tipo',
            'Adicionar à composição'
          ],
          correctAnswer: 2,
          explanation: 'Após clicar em "Novo Insumo", o primeiro passo é selecionar o tipo (Material, Mão de Obra ou Equipamento).'
        },
        {
          id: 'q3-5',
          question: 'Qual unidade é mais adequada para "Cimento Portland"?',
          options: [
            'h (hora)',
            'saco ou kg',
            'm² (metro quadrado)',
            'dia'
          ],
          correctAnswer: 1,
          explanation: 'Cimento é um material medido em sacos ou kg (quilograma).'
        },
        {
          id: 'q3-6',
          question: 'Como mão de obra é geralmente medida?',
          options: [
            'kg, m, L',
            'un, saco, m³',
            'h (hora), dia, mês',
            'm², m³, ton'
          ],
          correctAnswer: 2,
          explanation: 'Mão de obra é medida em unidades de tempo: hora (h), dia ou mês.'
        },
        {
          id: 'q3-7',
          question: 'Quando um insumo cadastrado pode ser usado em composições?',
          options: [
            'Apenas após 24 horas',
            'Imediatamente após salvar',
            'Somente após aprovação do admin',
            'Nunca pode ser usado'
          ],
          correctAnswer: 1,
          explanation: 'Assim que o insumo é salvo, ele fica disponível para uso imediato em composições.'
        },
        {
          id: 'q3-8',
          question: 'Como adicionar um insumo a uma composição?',
          options: [
            'Criar um novo orçamento',
            'Clicar em "Adicionar Insumo" e buscar',
            'Fazer upload de planilha',
            'Não é possível adicionar'
          ],
          correctAnswer: 1,
          explanation: 'Dentro de uma composição, use o botão "Adicionar Insumo" e busque pelo código ou descrição.'
        },
        {
          id: 'q3-9',
          question: 'Qual NÃO é uma dica importante para cadastro de insumos?',
          options: [
            'Manter nomenclatura padronizada',
            'Atualizar preços periodicamente',
            'Criar muitas duplicatas',
            'Usar códigos de referência'
          ],
          correctAnswer: 2,
          explanation: 'Criar duplicatas deve ser evitado. É importante verificar se o insumo já existe antes de cadastrar.'
        },
        {
          id: 'q3-10',
          question: 'Para que serve o código de referência SINAPI?',
          options: [
            'Para pagamento de fornecedores',
            'Para padronização e facilitar buscas',
            'Para calcular impostos',
            'Para gerar relatórios'
          ],
          correctAnswer: 1,
          explanation: 'Códigos SINAPI padronizam insumos e facilitam a busca e referência em todo o setor.'
        }
      ]
    }
  }
];
