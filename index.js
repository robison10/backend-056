const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota principal pra testar
app.get('/', (req, res) => {
  res.send('Backend Lord rodando! Conectado com sucesso no mod.');
});

// Inicia o servidor na porta do Render
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
