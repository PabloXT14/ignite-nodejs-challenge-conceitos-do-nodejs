# Conceitos do NodeJS
Esta é uma aplicação NodeJS que simula a implementação de uma Todo List(lista de tarefas) na parte do Back-End, onde realiza-se o CRUD (Create, Read, Update, Delete) dos todos.

Os objetivos principais foram treinar e aprimorar conceitos bases do NodeJS com a Biblioteca Express, como `criação de rotas`, `recebimento e envio de parâmetros do tipo Route, Query e Body` e `utilização de Middlewares`.

Contudo, este é um projeto desenvolvido como Desafio do curso Ignite NodeJS da [Rocketseat](https://www.rocketseat.com.br/).


## 🚀 Technologies
✔ NodeJS
<br>
✔ JavaScript
<br>
✔ [Library Express](https://expressjs.com/)
<br>
✔ [Package Nodemon](https://www.npmjs.com/package/nodemon)
<br>
✔ [Package uuid](https://www.npmjs.com/package/uuid)
<br>
✔ [Package Swagger](https://swagger.io/) (para criação da documentação da API)
<br>
✔ IDE: VS Code

## ⚙ Settings
* Para executar o projeto você deve baixar os arquivos ou dar um `git clone` do repositório.
* Após baixar rode o comando `yarn` no terminal dentro do diretório do projeto para baixar todas as dependências.
* Depois de baixar as dependências siga os seguintes passos para execução do projeto:
    - `yarn dev`: para executar o servidor na base url `http://localhost:3333`.
    > 🚨 OBS
    > Você pode utilizar o [Insômnia](https://insomnia.rest/download) para testar as rotas da aplicação


## Routes
* Para saber mais detalhes sobre parâmetros e outras coisas de cada rota, após iniciar o servidor com `yarn dev` acesse no seu navegador a rota `http://localhost:3333/api-docs`, esta rota irá retornar a documentação da API com Swagger, (obs: esta documentação também permite realizar testes das rotas por ela).

### /users(POST)
* Demonstration:
<img src="./Demonstrations/Demonstration01-Rota-Create-Account.jpg" alt="Demostração Rota de criação de usuário">

### /todos(GET)
* Demonstration:
<img src="./Demonstrations/Demonstration02-Rota-Create-Todo.jpg" alt="Demostração Rota de criação de todo">

### /todos(POST)
* Demonstration:
<img src="./Demonstrations/Demonstration03-Rota-List-Todos.jpg" alt="Demostração Rota de listagem de todos">

### /todos/:id(PUT)
* Demonstration:
<img src="./Demonstrations/Demonstration04-Rota-Update-Todo.jpg" alt="Demostração Rota de atualização do todo">

### /todos/:id/done(PATCH)
* Demonstration:
<img src="./Demonstrations/Demonstration05-Rota-Conclued-Todo.jpg" alt="Demostração Rota de coclusão de todo">

### /todos/:id(DELETE)
* Demonstration:
<img src="./Demonstrations/Demonstration06-Rota-Delete-Todo.jpg" alt="Demostração Rota de deletar todo">

