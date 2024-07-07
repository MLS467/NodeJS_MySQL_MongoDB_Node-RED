const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const configServer = require('./config');

const servidor = http.createServer((req, res) => {

    if (req.url === '/envioDeArquivo') {
        const form = new formidable.IncomingForm();

        form.parse(req, (erro, campos, arquivos) => {
            if (erro) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Erro ao processar o formulário');
                res.end();
                return;
            }

            const file = arquivos.filetoupload ? arquivos.filetoupload[0] : null;
            if (file) {
                const oldPath = file.filepath || file.path;
                const newPath = path.join(__dirname, 'img', file.originalFilename || file.name);

                console.log("Caminho antigo:", oldPath);
                console.log("Caminho novo:", newPath);

                fs.rename(oldPath, newPath, (erro) => {
                    if (erro) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.write('Erro ao mover o arquivo');
                        res.end();
                        return;
                    }
                    res.write('Arquivo movido com sucesso!');
                    res.end();
                });
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write('Nenhum arquivo enviado');
                res.end();
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(`<form action="/envioDeArquivo" method="post" enctype="multipart/form-data">`);
        res.write(`<input type="file" name="filetoupload">`);
        res.write(`<input type="submit" value="Enviar">`);
        res.write(`</form>`);
        res.end();
    }
});

servidor.listen(configServer.port, configServer.serverName, configServer.callback);
