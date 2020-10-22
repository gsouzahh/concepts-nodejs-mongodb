const express = require('express');
const Products = require('./controllers/ProductController')

const routes = express.Router();

routes.get('/products', Products.index); //rota pra mostrar todos
routes.get('/products/:id', Products.show); //rota pra mostrar um
routes.post('/products', Products.store); //rota pra criar um
routes.put('/products/:id', Products.update); //rota pra atualizar um
routes.delete('/products/:id', Products.destroy); //rota pra deletar um

module.exports = routes;