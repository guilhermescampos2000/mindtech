const express = require('express');
// O arquivo real do DB está em /db/database.js na raiz do projeto
const db = require('../../db/database'); // Importa o objeto DB

const router = express.Router();

/**
 * [POST] /subscribe
 */
router.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'E-mail inválido ou obrigatório.' });
  }

  // 1. Verifica se o e-mail já existe
  db.get('SELECT * FROM subscribers WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor.', error: err.message });
    }

    // 2. E-mail repetido
    if (row) {
      return res.status(409).json({ message: 'Este e-mail já está cadastrado.' });
    }

    // 3. Insere o novo e-mail
    db.run('INSERT INTO subscribers (email) VALUES (?)', [email], function(err) {
      if (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar o e-mail.', error: err.message });
      }
      res.status(201).json({ 
        message: 'Inscrição realizada com sucesso!', 
        email: email
      });
    });
  });
});

/**
 * [DELETE] /unsubscribe/:email
 */
router.delete('/unsubscribe/:email', (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: 'O e-mail é obrigatório para descadastro.' });
  }

  db.run('DELETE FROM subscribers WHERE email = ?', [email], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao cancelar a inscrição.', error: err.message });
    }

    if (this.changes > 0) {
      res.status(200).json({ message: 'Inscrição cancelada com sucesso.' });
    } else {
      res.status(404).json({ message: 'E-mail não encontrado.' });
    }
  });
});

module.exports = router;