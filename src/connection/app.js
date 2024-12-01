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

// Função para lidar com erros e enviar respostas
const handleResponse = (res, err, results, successMessage) => {
  if(err){
    console.error(err);
    return res.status(500).json({ message: 'Erro ao processar a requisição.' });
  };
  return res.status(200).json({ message: successMessage, results });
};

// Rota para inserir dados
app.post('/insert-dados', (req, res) => {
  const { query, valores } = req.body;

  if(!query || !valores){
    return res.status(400).json({ message: 'Query ou valores não fornecidos' });
  };

  pool.query(query, [valores], (err, results) => {
    handleResponse(res, err, results, 'Dados inseridos com sucesso!');
  });
});

// Rota para obter dados 
app.post('/get-dados', (req, res) => {
  const { query } = req.body;

  if(!query){
    return res.status(400).json({ message: 'Query não fornecida' });
  };

  pool.query(query, (err, results) => {
    handleResponse(res, err, results, 'Dados obtidos com sucesso!');
  });
});

// Rota para atualizar dados
app.post('/update-dados', (req, res) => {
  const { query, values } = req.body;

  if(!query || !values){
    return res.status(400).json({ message: 'Query ou valores não fornecidos' });
  };

  pool.query(query, values, (err, results) => {
    handleResponse(res, err, results, 'Dados atualizados com sucesso!');
  });
});