# Projeto Serverless com TypeScript

Este projeto demonstra a criação de uma aplicação serverless utilizando o Framework Serverless, TypeScript e AWS.
A seguir, está o passo a passo para clonar, configurar e executar o projeto localmente.

## Requisitos prévios

- Node.js (versão recomendada: LTS)
- Git
- NPM (gerenciado junto com o Node.js)

## Passo a passo

1. Clonar o repositório

Abra o terminal e execute o comando abaixo para clonar o projeto do repositório Git (substitua `<URL_DO_REPOSITORIO>` pela URL real do seu repositório):

git clone <URL_DO_REPOSITORIO>

### 2. Navegar até a pasta do projeto

cd nome-do-projeto

### 3. Instalar as dependências

Execute o comando abaixo para instalar todas as dependências necessárias:

npm install

Este comando instalará:

- TypeScript, ts-node e tipos do Node.js para desenvolvimento
- Serverless Framework e plugins
- SDK da AWS para execução local e testes
- Plugin serverless-offline para rodar a aplicação localmente

### 4. Configurar o TypeScript

Se ainda não foi feito, crie o arquivo `tsconfig.json` com o comando:

npx tsc --init

Este arquivo contém as configurações padrão do TypeScript.

### 5. Executar o projeto localmente

Para rodar o projeto localmente com o plugin `serverless-offline`, utilize:

npx serverless offline

Este comando inicia um servidor local que simula os endpoints AWS API Gateway, permitindo testes durante o desenvolvimento.

### 6. (Opcional) Desplegar na AWS

Para implantar a aplicação na AWS, configure suas credenciais AWS e execute:

npx serverless deploy

## Resumo dos comandos principais

# Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# Entrar na pasta do projeto
cd nome-do-projeto

# Instalar dependências
npm install

# Executar localmente
npx serverless offline


## Observações finais

- Os endpoints locais estarão disponíveis na porta padrão do `serverless-offline` (geralmente 3000)
