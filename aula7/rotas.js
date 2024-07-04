const express = require('express');
const rotas = express.Router();
const db = require('./db');


rotas.get('/', (req, res) => {
    res.send("SEJA BEM VINDO!");
})

rotas.get('/:curso', (req, res) => {
    const curso = req.params.curso;

    const resul = db.find(i => i.curso == curso);
    if (resul) {
        res.statusCode = 200;
        res.json(resul);
    } else {
        res.status = 404;
        res.send("<h1>404 :( Not Found</h1>");
    }
    res.end();
})

module.exports = rotas;
