const config = {
    port: process.env.PORT || 3000,
    serverName: '127.0.0.1',
    callback: () => {
        console.log(`Servidor rodando em http://${config.serverName}:${config.port}`)
    }
};
// app.listen(config.port, config.serverName, config.callback); 
module.exports = config;