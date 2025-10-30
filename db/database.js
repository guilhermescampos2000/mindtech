const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conecta ao banco de dados SQLite usando caminho absoluto para evitar problemas
const dbPath = path.join(__dirname, 'mindtech.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    // Cria a tabela de 'subscribers' se ela não existir
    db.run(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Erro ao criar tabela:', err.message);
      } else {
        console.log('Tabela "subscribers" pronta.');
      }
    });
  }
});

// Exporta a conexão para ser usada nas rotas
module.exports = db;