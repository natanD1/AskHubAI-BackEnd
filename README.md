# 🤖 AskHubAI - Backend

Backend da aplicação **AskHubAI** - uma plataforma inteligente de perguntas e respostas que combina uma API REST robusta desenvolvida com **Node.js** e **TypeScript**, integrada com a **IA do Google Gemini** para fornecer respostas contextuais e precisas.

## 🎯 Sobre o Projeto

O **AskHubAI** é uma solução completa que permite aos usuários fazer perguntas e receber respostas inteligentes geradas pela IA do Gemini. O backend fornece uma API REST escalável e type-safe, com suporte a salas de chat, transcrição de áudio, gerenciamento de perguntas em tempo real e integração nativa com inteligência artificial.

### ✨ Principais Funcionalidades

- 🧠 **Integração com Google Gemini AI** - Respostas inteligentes e contextuais
- 🎤 **Transcrição de Áudio** - Converte áudio para texto com IA
- 📊 **Embeddings Vetoriais** - Busca semântica avançada com pgvector
- 💬 **Sistema de Salas** - Organização de perguntas por tópicos
- ⚡ **API REST Performática** - Endpoints otimizados com Fastify
- 🔒 **Type Safety** - Validação robusta com TypeScript e Zod
- 🐳 **Docker Ready** - Containerização completa

## 🚀 Stack Tecnológica

### Core
- **Node.js** (v18+) - Runtime JavaScript moderno
- **TypeScript** - Linguagem tipada para maior segurança
- **Fastify** - Framework web ultra-rápido e eficiente
- **Google Gemini AI** - Inteligência artificial avançada

### Banco de Dados & ORM
- **PostgreSQL** - Banco relacional robusto
- **pgvector** - Extensão para operações vetoriais
- **Drizzle ORM** - ORM type-safe para TypeScript

### Validação & Qualidade
- **Zod** - Validação de schemas e runtime type checking
- **Biome** - Linter e formatador de código moderno
- **TypeScript Strict Mode** - Máxima segurança de tipos

### Infraestrutura
- **Docker** - Containerização completa
- **Docker Compose** - Orquestração de serviços
- **CORS** - Configuração para comunicação cross-origin

## 🤖 Integração com IA

### Google Gemini API
- **Modelo**: `gemini-2.5-flash` para geração de conteúdo
- **Embeddings**: `text-embedding-004` para busca semântica
- **Transcrição**: Conversão de áudio para texto
- **Geração de Respostas**: Contextualizadas e precisas

### Funcionalidades de IA
- 🎯 **Respostas Contextuais** - Baseadas em conteúdo específico
- 🔍 **Busca Semântica** - Encontra conteúdo relacionado por significado
- 🎙️ **Processamento de Áudio** - Transcrição automática
- 📝 **Geração de Conteúdo** - Respostas educativas e profissionais

## 📦 Principais Dependências

```json
{
  "fastify": "^5.4.0",
  "fastify-type-provider-zod": "^5.0.1",
  "drizzle-orm": "^0.44.2",
  "postgres": "^3.4.7",
  "zod": "^3.25.75",
  "@fastify/cors": "^11.0.1"
}
```

## 🏗️ Padrões de Projeto

- **Plugin System**: Utilização do sistema de plugins do Fastify para organizar rotas
- **Type Safety**: Tipagem forte com TypeScript e Zod para validação
- **Environment Variables**: Configuração centralizada através de variáveis de ambiente
- **Database Schema**: Esquemas organizados com Drizzle ORM
- **CORS**: Configuração de CORS para comunicação com frontend

## ⚙️ Configuração e Setup

### 1. Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- PostgreSQL (ou usar via Docker)

### 2. Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd server

# Instale as dependências
npm install
```

### 3. Configuração do Banco de Dados

```bash
# Inicie o PostgreSQL via Docker
docker-compose up -d

# Execute as migrações
npm run db:migrate

# Popular o banco com dados iniciais (opcional)
npm run db:seed
```

### 4. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Configuração do Servidor
PORT=3333

# Banco de Dados
DATABASE_URL=postgresql://docker:docker@localhost:5432/nlw_agents

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Configurações Opcionais
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

> ⚠️ **Importante**: Obtenha sua chave da API do Gemini em [Google AI Studio](https://aistudio.google.com/)

### 5. Executar o Projeto

```bash
# Desenvolvimento (com watch mode)
npm run dev

# Produção
npm start
```

## 📊 Estrutura do Banco de Dados

O projeto utiliza **PostgreSQL** com **pgvector** para suporte a operações com vetores:

### Tabelas Principais

- **rooms**: Salas de chat com metadados
  - `id` (UUID) - Identificador único
  - `name` (VARCHAR) - Nome da sala
  - `created_at` (TIMESTAMP) - Data de criação

- **questions**: Perguntas dos usuários
  - `id` (UUID) - Identificador único
  - `room_id` (UUID) - Referência à sala
  - `text` (TEXT) - Conteúdo da pergunta
  - `audio_url` (VARCHAR) - URL do áudio original
  - `embedding` (VECTOR) - Vetor semântico para busca
  - `created_at` (TIMESTAMP) - Data de criação

- **answers**: Respostas geradas pela IA
  - `id` (UUID) - Identificador único
  - `question_id` (UUID) - Referência à pergunta
  - `content` (TEXT) - Resposta da IA
  - `context_used` (TEXT) - Contexto utilizado
  - `created_at` (TIMESTAMP) - Data de criação

### Índices e Performance
- Índice vetorial para busca semântica (pgvector)
- Índices compostos para queries otimizadas
- Particionamento por data para escalabilidade

## 🔗 Endpoints da API

### 🏠 **Salas**

#### `GET /rooms`
Lista todas as salas disponíveis
```json
Response: [
  {
    "id": "uuid",
    "name": "string",
    "questions_count": "number"
  }
]
```

#### `POST /rooms`
Cria uma nova sala
```json
Body: { "name": "string" }
Response: { "id": "uuid", "name": "string" }
```

### ❓ **Perguntas**

#### `POST /rooms/:roomId/questions`
Cria uma pergunta na sala
```json
Body: { 
  "text": "string",
  "audio": "base64" (opcional),
  "mimeType": "string" (se audio presente)
}
Response: { 
  "id": "uuid", 
  "text": "string",
  "answer": "string" 
}
```

#### `GET /rooms/:roomId/questions`
Lista perguntas da sala com busca semântica
```json
Query: { 
  "search": "string" (opcional),
  "limit": "number" (default: 10)
}
Response: [
  {
    "id": "uuid",
    "text": "string",
    "answer": "string",
    "created_at": "timestamp",
    "similarity": "number" (se busca ativa)
  }
]
```

### 🎤 **Transcrição**

#### `POST /transcribe`
Transcreve áudio para texto
```json
Body: { 
  "audio": "base64",
  "mimeType": "audio/mp3|audio/wav|audio/m4a"
}
Response: { "transcription": "string" }
```

### 🧠 **IA e Embeddings**

#### `POST /generate-answer`
Gera resposta baseada em contexto
```json
Body: { 
  "question": "string",
  "context": ["string"],
  "roomId": "uuid" (opcional)
}
Response: { 
  "answer": "string",
  "sources": ["string"]
}
```

#### `POST /embeddings`
Gera embeddings para texto
```json
Body: { "text": "string" }
Response: { "embedding": [number] }
```

### 🔍 **Busca**

#### `GET /search`
Busca semântica global
```json
Query: { 
  "q": "string",
  "limit": "number",
  "threshold": "number" (similaridade mínima)
}
Response: [
  {
    "type": "question|answer",
    "content": "string",
    "room": "string",
    "similarity": "number"
  }
]
```

### 📊 **Health & Status**

#### `GET /health`
Verificação de saúde da API
```json
Response: { 
  "status": "ok",
  "timestamp": "ISO string",
  "services": {
    "database": "connected|error",
    "gemini": "connected|error"
  }
}
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com watch
- `npm start` - Executa em modo produção
- `npm run db:migrate` - Executa migrações do banco de dados
- `npm run db:seed` - Popula o banco com dados iniciais
- `npm run db:drop` - Remove todas as tabelas do banco
- `npm run build` - Compila o projeto TypeScript
- `npm run lint` - Executa verificação de código com Biome
- `npm run format` - Formata o código com Biome

## � Comandos Úteis

### Banco de Dados
```bash
# Reset completo do banco
npm run db:drop && npm run db:migrate && npm run db:seed

# Verificar conexão
npm run db:check

# Backup do banco
docker exec nlw_agents_postgres pg_dump -U docker nlw_agents > backup.sql
```

### Docker
```bash
# Iniciar apenas o banco
docker-compose up postgres -d

# Ver logs dos containers
docker-compose logs -f

# Rebuild completo
docker-compose down && docker-compose up --build -d
```

## �📝 Configuração do Biome

O projeto utiliza **Biome** para formatação e linting do código, configurado em `biome.jsonc`:

```jsonc
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  }
}
```

## 🚀 Deploy

### Variáveis de Ambiente para Produção
```env
NODE_ENV=production
PORT=3333
DATABASE_URL=postgresql://user:password@host:5432/database
GEMINI_API_KEY=your_production_gemini_key
CORS_ORIGIN=https://yourdomain.com
```

### Docker em Produção
```bash
# Build da imagem
docker build -t askhubai-backend .

# Executar container
docker run -p 3333:3333 --env-file .env askhubai-backend
```

## 🤝 Contribuindo

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

- 📧 **Email**: seu-email@exemplo.com
- 💬 **Discord**: Rocketseat Community
- 📚 **Documentação**: [GitHub Wiki](link-para-wiki)

---

<div align="center">
  <p>Desenvolvido com 💜 durante o NLW Agents</p>
  <p>
    <a href="https://rocketseat.com.br">
      <img src="https://img.shields.io/badge/Rocketseat-%237159c1?style=flat&logo=ghost" alt="Rocketseat">
    </a>
  </p>
</div>

