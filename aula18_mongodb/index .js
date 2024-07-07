const mongodb = require('mongodb').MongoClient;
const pass = require('./senha');
const url = `mongodb+srv://maisson:${pass.senha.password}@cluster0.nivdlzc.mongodb.net/`;


mongodb.connect(url, (erro, banco) => {
    if (erro)
        throw erro;

    //CRIANDO A BASE DE DADOS
    const dbo = banco.db("cfbcursos");

    // OBJ PARA SER INSERIDO
    const obj = [
        { curso: 'curso de Typescript', canal: 'cfbcursos' },
        { curso: 'curso de Node.js', canal: 'cfbcursos' },
        { curso: 'curso de Python', canal: 'cfbcursos' },
        { curso: 'curso de Java', canal: 'cfbcursos' },
        { curso: 'curso de C#', canal: 'cfbcursos' },
        { curso: 'curso de Ruby', canal: 'cfbcursos' },
        { curso: 'curso de PHP', canal: 'cfbcursos' },
        { curso: 'curso de Swift', canal: 'cfbcursos' },
        { curso: 'curso de Kotlin', canal: 'cfbcursos' },
        { curso: 'curso de Go', canal: 'cfbcursos' },
        { curso: 'curso de Rust', canal: 'cfbcursos' },
        { curso: 'curso de SQL', canal: 'cfbcursos' },
        { curso: 'curso de HTML', canal: 'cfbcursos' },
        { curso: 'curso de CSS', canal: 'cfbcursos' },
        { curso: 'curso de JavaScript', canal: 'cfbcursos' },
        { curso: 'curso de React', canal: 'cfbcursos' },
        { curso: 'curso de Angular', canal: 'cfbcursos' },
        { curso: 'curso de Vue.js', canal: 'cfbcursos' },
        { curso: 'curso de Django', canal: 'cfbcursos' },
        { curso: 'curso de Flask', canal: 'cfbcursos' },
        { curso: 'curso de Laravel', canal: 'cfbcursos' }
    ]

    // // CRIAR COLEÇÃO E INSERINDO
    // dbo.collection("colecao").insertMany(obj, async (erro, resultado) => {
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
    // const query = { curso: /P./gi }
    // dbo.collection("colecao").deleteMany(query, (erro, res) => {
    //     if (erro) throw erro;
    //     console.log(res.deletedCount + ' Arquivo(s) deletados ;)');
    // })

    // // MOSTRANDO ARQUIVOS DELETADOS
    // const query = {}
    dbo.collection("colecao",).find({}, { projection: { _id: 0 } }).sort({ curso: 1 }).toArray((erro, resultado) => {
        if (erro) throw erro;
        console.log(resultado);
        banco.close();
    })

})

