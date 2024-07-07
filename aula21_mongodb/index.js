const mongodb = require('mongodb').MongoClient;
const pass = require('./senha');
const url = `mongodb+srv://maisson:${pass.senha.password}@cluster0.nivdlzc.mongodb.net/`;


mongodb.connect(url, (erro, banco) => {
    if (erro)
        throw erro;

    const col = 'colecao1'
    const col2 = 'colecao2'


    //CRIANDO A BASE DE DADOS
    const dbo = banco.db("cfbcursos");

    // OBJ PARA SER INSERIDO
    const obj = [
        { idcursos: 1, curso: 'curso de C++', canal: 'cfbcursos' },
        { idcursos: 2, curso: 'curso de JavaScript', canal: 'cfbcursos' },
        { idcursos: 3, curso: 'curso de Python', canal: 'cfbcursos' },
        { idcursos: 4, curso: 'curso de Java', canal: 'cfbcursos' },
        { idcursos: 5, curso: 'curso de HTML', canal: 'cfbcursos' },
        { idcursos: 6, curso: 'curso de CSS', canal: 'cfbcursos' },
        { idcursos: 7, curso: 'curso de Node.js', canal: 'cfbcursos' },
        { idcursos: 8, curso: 'curso de PHP', canal: 'cfbcursos' },
        { idcursos: 9, curso: 'curso de MySQL', canal: 'cfbcursos' },
        { idcursos: 10, curso: 'curso de PostgreSQL', canal: 'cfbcursos' },
        { idcursos: 11, curso: 'curso de MongoDB', canal: 'cfbcursos' },
        { idcursos: 12, curso: 'curso de Angular', canal: 'cfbcursos' },
        { idcursos: 13, curso: 'curso de React', canal: 'cfbcursos' },
        { idcursos: 14, curso: 'curso de Vue.js', canal: 'cfbcursos' },
        { idcursos: 15, curso: 'curso de Ruby', canal: 'cfbcursos' },
        { idcursos: 16, curso: 'curso de Swift', canal: 'cfbcursos' },
        { idcursos: 17, curso: 'curso de Kotlin', canal: 'cfbcursos' },
        { idcursos: 18, curso: 'curso de TypeScript', canal: 'cfbcursos' }
    ]


    const obj2 = [
        { idcursos: 1, aulas: 120 },
        { idcursos: 2, aulas: 100 },
        { idcursos: 3, aulas: 80 },
        { idcursos: 4, aulas: 110 },
        { idcursos: 5, aulas: 50 },
        { idcursos: 6, aulas: 60 },
        { idcursos: 7, aulas: 90 },
        { idcursos: 8, aulas: 70 },
        { idcursos: 9, aulas: 85 },
        { idcursos: 10, aulas: 95 },
        { idcursos: 11, aulas: 75 },
        { idcursos: 12, aulas: 65 },
        { idcursos: 13, aulas: 55 },
        { idcursos: 14, aulas: 130 },
        { idcursos: 15, aulas: 140 },
        { idcursos: 16, aulas: 150 },
        { idcursos: 17, aulas: 160 },
        { idcursos: 18, aulas: 170 }
    ]

    // // CRIAR COLEÇÃO E INSERINDO

    // dbo.collection(col2).insertMany(obj2, async (erro, resultado) => {
    //     if (erro) throw erro;
    //     await console.log(resultado.insertedCount + " Inserido(s) com sucesso");
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


    //JUNTAR COLEÇÕES
    dbo.collection("colecao1").aggregate([
        {
            $lookup: {
                from: 'colecao2', // primeira colecao
                localField: 'idcursos', // campo para assossiar
                foreignField: 'idcursos', // campo do estrangeiro
                as: 'Detalhes'
            }
        }
    ]).toArray((erro, resultado) => {
        if (erro) throw erro;
        console.log(JSON.stringify(resultado));
        banco.close();
    })

    //     const ordenacao = { curso: 1 } // SE FOR 1 É CRESCENTE E -1 DECRESCENTE
    //     const query = {}
    //     dbo.collection('colecao1').find(query, { projection: { _id: 0 } }).toArray((erro, resultado) => {
    //         if (erro) throw erro;
    //         console.log(resultado);
    //         banco.close();
    //     })
})

