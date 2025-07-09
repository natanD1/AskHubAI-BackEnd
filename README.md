# 💬 Let Me Ask Back-End

Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat**, implementando uma API REST com Node.js e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas e tipos
- **Docker** - Containerização
- **Biome** - Linter e formatador de código

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
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/nlw_agents
```

### 5. Executar o Projeto

```bash
# Desenvolvimento (com watch mode)
npm run dev

# Produção
npm start
```

## 📊 Estrutura do Banco de Dados

O projeto utiliza **PostgreSQL** com **pgvector** para suporte a operações com vetores:

- **rooms**: Tabela principal para armazenar informações das salas

## 🔗 Endpoints da API

### GET /health
- **Descrição**: Verificação de saúde da API
- **Resposta**: `"ok"`

### GET /rooms
- **Descrição**: Lista todas as salas disponíveis
- **Resposta**: Array de objetos com `id` e `name`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com watch
- `npm start` - Executa em modo produção
- `npm run db:seed` - Popula o banco com dados iniciais

## 📝 Configuração do Biome

O projeto utiliza **Biome** para formatação e linting do código, configurado em `biome.jsonc`.

---

Desenvolvido durante o **NLW Agents** da [Rocketseat](https://rocketseat.com.br) 🚀
