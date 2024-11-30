import mySQL from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importando o middleware CORS

// Criar um app Express
const app = express();

// Iniciar o servidor
const porta = 3001;
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

app.use(cors()); // Usar CORS para permitir requisições de diferentes origens
app.use(bodyParser.json()); // Para analisar JSON no corpo das requisições

// Criando um pool de conexões para melhor gerenciamento
const pool = mySQL.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvdbaligroup',
});

// Rota para inserir dados
app.post('/insert-dados', (req, res) => {
  const { query, valores } = req.body;

  if(!query || !valores){
    return res.status(400).json({ message: 'Query ou valores não fornecidos' });
  };

  pool.query(query, [valores], (err, results) => {
    if(err){
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ message: 'Erro ao inserir dados.' });
    };
    res.status(200).json({ message: 'Dados inseridos com sucesso!', results });
  });
});

// Rota para obter dados
app.get('/dados', (req, res) => {
  pool.query('SELECT * FROM test_tbl', (err, results) => {
    if (err) {
      console.error('Erro ao acessar os dados:', err);
      return res.status(500).json({ message: 'Erro ao acessar os dados.' });
    };
    res.status(200).json(results);
  });
});