const express = require('express');
const cors = require('cors');
const subscriberRoutes = require('./routes/subscriberRoutes'); // Importa as rotas

const app = express();
const PORT = 4000;

// O banco de dados é inicializado automaticamente ao importar o arquivo no diretório superior
// Ajuste do caminho para apontar para a pasta `db` na raiz do projeto
require('../db/database'); 

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal: utiliza as rotas separadas
app.use('/', subscriberRoutes);

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Back-end rodando em http://localhost:${PORT}`);
});