const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();

// Middleware do Swagger(rota para detalhes da documentação da API)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors());
app.use(express.json());


const users = [];

// Customized Middlewares
function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  // Checando se usuário existe
  if (!user) {
    return response.status(404).json({ error: "User not found" })
  }

  request.user = user;// enviando dado pelo request

  return next();// função para continuar o fluxo normal da aplicação
}


/* ===== CRUD dos Todos ===== */
/*
  Create Read Update Delete (CRUD)
*/

/* Rota de criação de usuário */
app.post('/users', (request, response) => {
  const { name, username } = request.body;

  // Checando se username já existe
  const userAlredyExists = users.find(user => user.username === username)

  if (userAlredyExists) {
    return response.status(400).json({ error: "This user alredy exists" });
  }

  // Criando novo usuário
  const newUser = {
    id: uuidv4(),
    name: name,
    username: username,
    todos: []
  }

  users.push(newUser);

  return response.status(201).json(newUser);

});


/* Rota para listar todos de um user específico */
app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;//vem do Middleware

  return response.json(user.todos);// retorna os todos do user
});


/* Rota para criação dos todos */
app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;// vem do Middleware
  const { title, deadline } = request.body;

  const newTodo = {
    id: uuidv4(),
    title: title,
    done: false,
    deadline: new Date(deadline),//obs: deve estar no formato ANO-MÊS-DIA
    created_at: new Date()
  }

  // Add todo no array
  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});


/* Rota para atualizar dados de um todo */
app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;//come from Middleware
  const { title, deadline } = request.body;
  const { id } = request.params;

  // Checando se tarefa existe
  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return response.status(404).json({ error: "Todo not found!" })
  }

  //Alterando dados do todo
  todoExists.title = title;
  todoExists.deadline = new Date(deadline);

  return response.status(200).json(todoExists);
});


/* Rota para colocar todo como feito */
app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;//vem do Middleware
  const { id } = request.params;

  // Pegando todo especifico por id
  const updatedTodo = user.todos.find(todo => todo.id === id);

  // Checando se todo existe
  if (!updatedTodo) {
    return response.status(404).json({ error: "Todo not found!" })
  }

  // Atualizando campo done do todo
  updatedTodo.done = true;

  return response.status(200).json(updatedTodo);

});


/* Rota para deletar um todo */
app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;//vem do Middleware
  const { id } = request.params;

  const todoExists = user.todos.find(todo => todo.id === id);

  // Checando se todo existe
  if (!todoExists) {
    return response.status(404).json({ error: "Todo not found!" });
  }

  // Excluindo todo
  user.todos.splice(todoExists, 1);

  // Obs: status(204): representa uma resposta sem conteúdo.
  return response.status(204).json();
});

module.exports = app;