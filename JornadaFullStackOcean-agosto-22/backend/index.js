const express = require('express');
const app = express();



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
app.get("/pontuacoes", function(req, res) {
  res.send(lista);
});

//[POST] Create
app.post("/pontuacoes", function (req, res){
  const item = req.body;

  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,

  });
  console.log("Item criado com sucesso");

  res.send("criar uma pontuação");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/")
);