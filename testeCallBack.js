

console.time();
const pegaDados = (func, id) => {
    console.log("Entrou aqui")
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("Pegou dados")
            func(res)
        });

}

/**
 * FAZ CHAMADA DA FUNÇÃO PEGAR DADOS E PASSA A FUNÇÃO DE CALLBACK COMO PARAMETRO
 * PARA RECEBER OS DADOS DO RESULTADO DA REQUISIÇÃO
 */
pegaDados(function teste(dados) {
    console.log(dados.name);
}, 4)
console.timeEnd();

console.log('Esperando...');