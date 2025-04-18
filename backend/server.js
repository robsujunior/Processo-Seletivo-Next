// backend/server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Rota para salvar mensagens
app.post("/mensagens", (req, res) => {
  const novaMensagem = req.body;

  fs.readFile("mensagens.json", "utf8", (err, data) => {
    let mensagens = [];
    if (!err && data) {
      mensagens = JSON.parse(data);
    }
    mensagens.push(novaMensagem);

    fs.writeFile(
      "mensagens.json",
      JSON.stringify(mensagens, null, 2),
      (err) => {
        if (err) return res.status(500).send("Erro ao salvar mensagem");
        res.status(200).send("Mensagem salva com sucesso");
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
