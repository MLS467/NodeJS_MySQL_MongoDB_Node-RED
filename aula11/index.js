const http = require('http');
const configServer = require('./config');
const evento = require('events');
// instancia a classe de evento
const eventosEmissor = new evento.EventEmitter();
const msg = () => { console.log(`mandou a mensagem bolada!`) };

// nomeia o evento 
eventosEmissor.on('mostraMsg', msg);

const servidor = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        // emite o evento
        eventosEmissor.emit('mostraMsg');
        res.writeHead(200, { 'Content-Type': 'Text/html;charset=utf8' });
        res.write('<br>Teste');
        res.end();
    }

})

servidor.listen(configServer.port, configServer.serverName, configServer.callback);

