const http = require('http').createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

    const config = { titulo: "CFB Cursos", curso: 'Node.js', teste: 'ZikaTeste', testando: 'FONES' }



    if (req.url == '/') {
        res.write('<h1>' + config.titulo + '</h1>');
    }


    if (req.url == '/testando') {
        res.write('<h1>' + config.testando + '</h1>');
    }


    if (req.url == '/curso') {
        res.write('<h1>' + config.curso + '</h1>');
    }

    if (req.url == '/curso/teste') {
        res.write('<h1>' + config.teste + '</h1>');
    }

    res.end();
})

http.listen(3000, 'localhost', () => { console.log('Servidor rodando em http://localhost:3000') });