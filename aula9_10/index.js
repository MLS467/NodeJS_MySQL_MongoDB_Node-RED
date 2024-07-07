(async () => {
    const conexao = require('./db');
    $nome = "Manuelle";
    $idade = 3;

    const cliente = {
        nome: $nome,
        idade: $idade
    }

    // conexao.AtualizarDados(1, cliente);
    // conexao.inserirDados(cliente)


    // conexao.excluirDados(2)
    const clientes = await conexao.selecionarTodos();
    console.log(clientes);

})()