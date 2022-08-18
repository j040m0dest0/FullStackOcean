const express = require('express');
const { MongoClient } = require('mongodb');


//const url = "mongodb://localhost:27017";
const url = "mongodb+srv://admin:M8krNXHdNyvJLiFU@cluster0.mvbom7g.mongodb.net/";
const dbName = "jornada-fullstack-agosto-22"




//Declaração da função main
async function main(){

   // Realizar a conexão com o MongoClient
  // MongoClient -> MongoDatabase -> MongoCollection

  // Conexões com o client podem levar um tempo para
  //  concluir. Portanto, utilizamos o mecanismo de
  //  Promises do JavaScript, que permitem aguardar
  //  esse tempo. Para isso, vamos usar o async/await.

  console.log("conectando com o banco de dados ........")

  

    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("pontuacoes")

  

    console.log("conectado com sucesso ")

    const app = express();


  // Sinalizamos para o express que estamos usando
  // JSON no body das requisições
    app.use(express.json());

    app.get('/', function (req, res) {
      res.send('Humble project');
    });

    app.get('/oi', function (req, res) {
        res.send('Olá Mundo');
    });


    const lista = [
      {
        id: 1,
        nome: "João",
        pontos: 90,
      },
      {
        id: 2,
        nome: "Carol",
        pontos: 20,
      },
      {
        id: 3,
        nome: "Fabio",
        pontos: 70,
      },
    ];


    //[GET] Read All
    app.get("/pontuacoes", async function(req, res) {
        const itens = await collection
        .find()
        .sort({ pontos: -1 })
        .limit(10)
        .toArray();
        
      res.send(itens);
    });

    //[POST] Create
    app.post("/pontuacoes", async function (req, res){
      const item = req.body;

      await collection.insertOne(item);
   
      res.send(item);
    });


    app.listen(process.env.PORT || 3000);

    // app.listen(3000, () =>
    //   console.log("Servidor rodando em http://localhost:3000/")
    // );
}

//Executando a função main
main();