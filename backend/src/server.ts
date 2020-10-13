import express from 'express'; // express ajuda a lidar com requisição e resposta

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros 

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: hhtp://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users

app.listen(3333); // localhost:3333

// BANCO DE DADOS - Driver nativo, Query builder, ORM
