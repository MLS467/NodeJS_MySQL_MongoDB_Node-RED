const url = require('url');
const http = require('http').createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

    const p = url.parse(req.url, true).query;
    console.log(p);
    console.log(p.nome);
    console.log(p.idade);
    res.end();
});


http.listen(
    3000, 'localhost',
    () => {
        console.log('Servidor rodando em http://localhost:3000')
    });