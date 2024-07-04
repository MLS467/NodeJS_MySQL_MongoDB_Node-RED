const express = require('express');
const app = express();
const config = require('./config');

app.get('/', function (req, res) {
    res.send("Usando o express");
    res.end();
});

app.listen(config.port, config.serverName, config.callback);