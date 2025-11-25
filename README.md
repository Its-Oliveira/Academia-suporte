# Sistema de Treinamento - Plataforma de Orçamentos

Sistema profissional de treinamento para equipe de suporte com módulos progressivos, controle de progresso e sistema de autenticação.

## 🚀 Deploy no GitHub Pages

### Pré-requisitos
- Node.js 18+ instalado
- Conta no GitHub
- Git instalado

### Passos para Deploy

#### 1. Preparar o Projeto Localmente

```bash
# Clone o repositório (se ainda não tiver)
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install

# Teste o build local
npm run build
```

#### 2. Criar/Atualizar Repositório no GitHub

```bash
# Se ainda não tiver um repositório remoto
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Envie o código
git add .
git commit -m "Configuração para GitHub Pages"
git push -u origin main
```

#### 3. Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O workflow de deploy será executado automaticamente

#### 4. Acessar o Site

Após o deploy (cerca de 2-5 minutos), seu site estará disponível em:
```
https://seu-usuario.github.io/seu-repositorio/
```

### 🔄 Atualizações Automáticas

Qualquer push para a branch `main` irá automaticamente:
1. Fazer build do projeto
2. Fazer deploy para GitHub Pages
3. Atualizar o site em produção

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
/
├── .github/workflows/     # GitHub Actions workflows
├── public/                # Arquivos estáticos
│   ├── .nojekyll         # Necessário para GitHub Pages
│   └── favicon.ico       # Ícone do site
├── src/                   # Código fonte
│   ├── components/       # Componentes React
│   ├── pages/            # Páginas da aplicação
│   ├── contexts/         # Contextos React
│   ├── data/             # Dados estáticos
│   └── layouts/          # Layouts da aplicação
├── index.html            # HTML principal
├── vite.config.ts        # Configuração Vite
└── package.json          # Dependências
```

## 🔧 Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **React Router** - Roteamento (Hash mode para GitHub Pages)
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📝 Funcionalidades

- ✅ Sistema de autenticação
- ✅ Treinamento progressivo em 3 níveis
- ✅ Controle de progresso por página
- ✅ Timer de treinamento
- ✅ Sistema de quiz
- ✅ Biblioteca de recursos
- ✅ Dashboard administrativo
- ✅ Tema claro/escuro

## 🔐 Credenciais de Teste

### Usuário Admin
- Email: `admin@example.com`
- Senha: `admin123`

### Usuário Regular
- Email: `user@example.com`
- Senha: `user123`

## 🐛 Troubleshooting

### Build falha no GitHub Actions
- Verifique se todas as dependências estão no `package.json`
- Verifique erros de TypeScript no código

### Página em branco após deploy
- Confirme que o workflow de deploy foi executado com sucesso
- Verifique se o `base: './'` está configurado no `vite.config.ts`

### Rotas não funcionam
- O projeto usa Hash Router (`#/`) para compatibilidade com GitHub Pages
- Todas as rotas devem ter o formato: `https://seu-site.github.io/repo/#/rota`

## 📞 Suporte

Para problemas ou dúvidas:
1. Verifique os logs do GitHub Actions
2. Revise a documentação do Vite
3. Confira as issues do repositório

## 📄 Licença

Este projeto é proprietário e destinado ao uso interno da equipe.
