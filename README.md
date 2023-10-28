### 1. Roteiro trinamento bugware 23/2

1. Instalar o nodejs

2. Baixar o vscode e algumas extensões como:
   1. Portugues (Brazil)
   2. material Icon
   3. REST Client
   4. Dracula Official

3. Iniciando o projeto com **npm init -y**

4. Iniciando um projeto TypeScript
   1. Adicionando TypeScript com **npm i -D typescript**
   2. Criando arquivo tsconfig.json com **npx tsc --init**
   3. Modificar o valor de _"rootDir":_ para **./src** dentro de tsconfig.json. Isso é importante para definir em qual pasta vai estar o código
   4. Configurando para desenvolvimento, devemos rodar o comando **npm i -D ts-node-dev**
   5. Configurando script no package.json para rodar a aplicação, basta criar o script **"dev": "ts-node-dev --ignore-watch node_modules src/index.ts"**

5. Instalando express para criar nossa API com **npm i express cors** e **npm i -D @types/express @types/cors**

6. Criando Variaveis de ambiente
   1. Crie um arquivo **.env**
   2. E adicione em nosso script dev a seguinte flag **--env-file=.env**

7. Rodando um _Hello World!_

8. Configurando conexão com o banco de dados
   1. Instalando as dependencias **npm install --save sequelize pg pg-hstore**
   2. Criando Conexão com o banco

9. Criando nossos Models
   1.  students
   2.  score

10. Criando class _ApiError_

11. Criando nossos Controllers e UseCases
    1.  CRUD students
    2.  CRUD score

12. Criando as rotas