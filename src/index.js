const express = require('express');
const cors = require('cors');

const { v4: uuidv4, v4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.header;

  const user = users.find(user => user.username === username);

  // Checando se usuário existe
  if (!user) {
    return response.status(404).json({ error: "User not found" })
  }

  request = user;

  next();
}

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
    id: v4(),
    name: name,
    username: username,
    todos: []
  }

  users.push(newUser);

  return response.status(201).json(newUser);

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;