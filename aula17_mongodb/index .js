const mongodb = require('mongodb').MongoClient;
const pass = require('./senha');
const url = `mongodb+srv://maisson:${pass.senha.password}@cluster0.nivdlzc.mongodb.net/`;


mongodb.connect(url, (erro, banco) => {
    if (erro)
        throw erro;

    //CRIANDO A BASE DE DADOS
    const dbo = banco.db("cfbcursos");

    // OBJ PARA SER INSERIDO
    // const obj = { curso: 'curso de Typescript', canal: 'cfbcursos' };

    // // CRIAR COLEÇÃO E INSERINDO
    // dbo.collection("colecao").insertOne(obj, (erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log("Inserido com sucesso");
    //     banco.close();
    // })

    // SELECIONA APENAS 1 REGISTRO
    // dbo.collection("colecao").findOne({}, (erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })

    // SELECIONA VARIOS E TRANSFORMA EM ARRAY
    // dbo.collection("colecao").find({}).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })

    // SELECIONA VARIOS E TRANSFORMA EM ARRAY E ESCOLHE OQUE VAI APARECER
    // dbo.collection("colecao").find({ canal: 'cfbcursos' }, { projection: { _id: 0 } }).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })

    // SELECIONA VARIOS E TRANSFORMA EM ARRAY E ESCOLHE OQUE VAI APARECER USANDO A "QUERY"

    // const query = { curso: /T./ }
    // dbo.collection("colecao").find(query, { projection: { _id: 0 } }).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })


    // SELECIONA VARIOS E TRANSFORMA EM ARRAY E ESCOLHE OQUE VAI APARECER USANDO A "QUERY" E ORDENANDO
    // const ordenacao = { curso: 1 } // SE FOR 1 É CRESCENTE E -1 DECRESCENTE
    // const query = {}
    // dbo.collection("colecao",).find(query, { projection: { _id: 0 } }).sort(ordenacao).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })


    //DELETANDO 1 ARQUIVO

    // const query = { curso: 'curso de node' }
    // dbo.collection("colecao").deleteOne(query, (erro, res) => {
    //     if (erro) throw erro;
    //     console.log('1 Arquivo deletado ;)');
    // })


    //DELETANDO MUITOS ARQUIVOS
    const query = { curso: /t/gi }
    dbo.collection("colecao").deleteMany(query, (erro, res) => {
        if (erro) throw erro;
        console.log('Arquivos deletados ;)');
    })

    // MOSTRANDO ARQUIVOS DELETADOS
    dbo.collection("colecao").find({}, { projection: { _id: 0 } }).toArray((erro, res) => {
        if (erro) throw erro;
        console.log(res);
        banco.close();
    })

})

