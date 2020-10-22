const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express(); //inicia o express
app.use(express.json()); //faz com que seja permitido o envio de dados para a aplicação no formato de json

mongoose.connect( //conecta com o mongodb
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

requireDir('./src/models');// ja importa todos os arquivos js dentro da pasta models aqui sem precisar colocar um por um, colocando logo em seguida /Products * requireDir('./src/models/Products'); requireDir('./src/models/Usuarios'); etc, etc...

// Rotas
app.use('/api', require('./src/routes')); //dou o require das rotas direto no parametro do use

app.use(cors()); //libera acesso dessa api pra todos os dominios, não só pra minha maquina locar como esta sendo feito mais caso suba essa aplicacao, como parametro poderia colocar qual o dominio expecifico poderia ter acesso, etc

app.listen(3002); //abre a porta 3002 "http://localhost:3002"