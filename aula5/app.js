const http = require('http');
const config = require('./config');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile(`${__dirname}/app.html`, (erro, cont) => {
        if (erro) throw erro;
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.write(cont);
        return res.end();
    })
})


server.listen(config.port, config.serverName, config.callback);