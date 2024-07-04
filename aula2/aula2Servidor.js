const http = require('http');
const port = 3000;
const nameServer = 'localhost';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
    res.write("TESTÂNDO");
    res.end();
}).listen(port, () => console.log(`Servidor rodando em http://${nameServer}:${port}`));