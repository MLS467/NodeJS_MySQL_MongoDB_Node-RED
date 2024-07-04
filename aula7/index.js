const express = require('express');
const app = express();
const rotas = require('./rotas');
const config = require('./config');


app.use('/', rotas);


app.listen(config.port, config.serverName, config.callback);