# Login e Cadastro com NextAuth

Um sistema completo de autenticação desenvolvido com Next.js 15, NextAuth.js, Prisma e SQLite, oferecendo uma experiência moderna e segura para gerenciamento de usuários.

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[NextAuth.js](https://authjs.dev)** - Biblioteca de autenticação completa
- **[Prisma](https://www.prisma.io/)** - ORM moderno para TypeScript
- **[SQLite](https://www.sqlite.org/)** - Banco de dados leve e eficiente
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com tipagem estática

## ✨ Funcionalidades

- 🔐 **Autenticação Segura** - Login e cadastro com NextAuth
- 🔒 **Criptografia** - Hash da senha no lado do cliente usando bcrypt
- 👤 **Gerenciamento de Usuários** - Registro, login e logout
- 🎨 **Interface Moderna** - UI responsiva com shadcn/ui e Tailwind
- 📱 **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- 💾 **Persistência de Dados** - SQLite com Prisma ORM

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### 1. Clone o repositório

```bash
git clone https://github.com/Kaue-Dev/saas-login-next-auth.git
cd saas-login-next-auth
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Execute o comando do NextAuth para gerar o arquivo `.env.local`:

```bash
npx auth secret
```

Este comando criará automaticamente o arquivo `.env.local` com o `AUTH_SECRET` necessário.

### 4. Configure o banco de dados

```bash
# Gerar o cliente Prisma
npx prisma generate

# Executar as migrações
npx prisma db push

# (Opcional) Visualizar o banco de dados
npx prisma studio
```

### 5. Execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🗄️ Esquema do Banco de Dados

O projeto utiliza o seguinte esquema Prisma:

```prisma
model User {
  id       String @id @default(cuid())
  name     String
  email    String @unique
  password String
}
```

## 🎨 Componentes UI

O projeto utiliza os seguintes componentes shadcn/ui:

- **Button** - Botões interativos
- **Card** - Containers para conteúdo
- **Input** - Campos de entrada estilizados
- **Label** - Rótulos para formulários

## 🚦 Rotas Principais

- `/` - Página inicial (acessível apenas quando autenticado)
- `/login` - Página de login (acessível apenas quando não autenticado)
- `/register` - Página de cadastro (acessível apenas quando não autenticado)
