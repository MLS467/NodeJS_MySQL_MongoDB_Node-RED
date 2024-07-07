const conectar = async () => {
    try {
        if (global.connect && global.connect.state != 'disconected')
            return global.connect;

        const mysql = require('mysql2/promise');
        const varConexao = {
            user: 'root',
            password: '',
            server: 'localhost',
            port: '3306',
            database: 'cfbcursos'
        }


        const conexao = await mysql.createConnection(
            `mysql://${varConexao.user}:${varConexao.password}@${varConexao.server}:${varConexao.port}/${varConexao.database}`
        )

        // const conexao = await mysql.createConnection({
        //     host: 'localhost',
        //     database: 'cfbcursos',
        //     user: 'root',
        //     password: ''
        // });

        // conexao.connect();

        // console.log('Conectado com sucesso!');

        global.connect = conexao;

        return conexao;

    } catch (error) {
        console.error(`erro ao conectar ${error}`);
    }
}


const selecionarTodos = async () => {
    const sql = `SELECT * FROM cliente_node`;
    const con = await conectar();

    const [res] = await con.query(sql);

    return await res;
}

const AtualizarDados = async (id, cliente) => {
    const sql = `UPDATE cliente_node SET nome=?, idade=? WHERE id = ? `;
    const valores = [cliente.nome, cliente.idade, id]
    const con = await conectar();
    const res = await con.query(sql, valores);
    if (!res) {
        console.error("Não foi possível atualizar os dados");
    }

}

const excluirDados = async (id) => {
    const sql = `DELETE FROM cliente_node WHERE id = ? `;
    const valores = [id]
    const con = await conectar();
    const res = await con.query(sql, valores);
    if (!res) {
        console.error("Não foi possível atualizar os dados");
    }

}

const inserirDados = async (cliente) => {
    const con = await conectar();
    const sql = `INSERT INTO cliente_node(nome,idade) VALUES (?,?)`;
    const valores = [cliente.nome, cliente.idade];
    const res = await con.query(sql, valores);
    if (!res) {
        console.error("Não foi possível inserir :(");
    }
    console.log("Inserido com sucesso :)");
}


module.exports = { selecionarTodos, inserirDados, AtualizarDados, excluirDados }