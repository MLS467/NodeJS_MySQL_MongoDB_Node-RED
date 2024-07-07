const mongodb = require('mongodb').MongoClient;
const pass = require('./senha');
const url = `mongodb+srv://maisson:${pass.senha.password}@cluster0.nivdlzc.mongodb.net/`;


mongodb.connect(url, (erro, banco) => {
    if (erro)
        throw erro;

    const col = 'colecao1'
    const co2 = 'colecao2'
    //CRIANDO A BASE DE DADOS
    const dbo = banco.db("cfbcursos");

    // OBJ PARA SER INSERIDO



    // // CRIAR COLEÇÃO E INSERINDO

    // dbo.collection(col).insertMany(obj, (erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado.insertedCount + " Inserido(s) com sucesso");
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

    // const query = {}
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

    // const query = { curso: /P./gi }
    // dbo.collection("colecao").deleteMany(query, async (erro, res) => {
    //     if (erro) throw erro;
    //     console.log(res.deletedCount + ' Arquivo(s) deletados ;)');
    // })

    // // MOSTRANDO ARQUIVOS DELETADOS

    // const query = {}
    // dbo.collection("colecao",).find({}, { projection: { _id: 0 } }).sort({ curso: 1 }).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })


    //ATUALIZANDO 1 DADO

    // const query = { curso: 'curso de C#' };
    // const objeto = { $set: { curso: 'curso de Maisson', canal: 'cfbcursos' } };
    // dbo.collection("colecao").updateOne(query, objeto, (erro, res) => {
    //     if (erro) throw erro;
    //     console.log("1 registro alterado");
    // })


    //ATUALIZANDO VÁRIOS DADOS
    // const query = { curso: /ss/gi };
    // const objeto = { $set: { curso: 'curso de Bolado', canal: 'cfbcursos' } };
    // dbo.collection("colecao").updateMany(query, objeto, async (erro, res) => {
    //     if (erro) throw erro;
    //    await console.log(`${res.modifiedCount} registros afetados`);
    // })

    // LIMITANDO O RECEBIMENTO DE DADOS
    // const query = {}
    // const limite = 5;
    // dbo.collection("colecao").find(query, { projection: { _id: 0 } }).sort({ curso: -1 }).limit(limite).toArray((erro, resultado) => {
    //     if (erro) throw erro;
    //     console.log(resultado);
    //     banco.close();
    // })




})

