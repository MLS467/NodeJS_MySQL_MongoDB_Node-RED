const conectar = async () => {
    if (global.conexao && global.conexao.state != 'disconected')
        return global.conexao;

    const mysql2 = require('mysql2/promise');
    const conexao = await mysql2.createConnection({
        host: 'localhost',
        database: 'cfbcursos',
        user: 'root',
        password: ''
    })
    // conexao.createConnection("mysql://root:''@localhost:3306/cfbcursos")
    conexao.connect((Error) => {
        if (Error) throw Error;
        console.log("Conectado com sucesso!");
    })

    global.conexao = conexao;

    return conexao;
}

const todosCliente = async () => {
    const con = await conectar();
    const sql = `SELECT * FROM cliente_node`;
    const [linhas] = await con.query(sql);

    return await linhas;
}



module.exports = { todosCliente }