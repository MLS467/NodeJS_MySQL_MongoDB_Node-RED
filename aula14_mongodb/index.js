const mongodb = require('mongodb').MongoClient;
const pass = require('./senha');
const url = `mongodb+srv://maisson:${pass.senha.password}@cluster0.nivdlzc.mongodb.net/`;


mongodb.connect(url, (erro, banco) => {
    if (erro)
        throw erro;

    //CRIANDO A BASE DE DADOS
    const dbo = banco.db("cfbcursos");

    // OBJ PARA SER INSERIDO
    const obj = { curso: 'curso de JAVASCRIPT', canal: 'cfbcursos' };

    // CRIAR COLEÇÃO E INSERINDO
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
    dbo.collection("colecao").find({ canal: 'cfbcursos' }, { projection: { _id: 0 } }).toArray((erro, resultado) => {
        if (erro) throw erro;
        console.log(resultado);
        banco.close();
    })
})

