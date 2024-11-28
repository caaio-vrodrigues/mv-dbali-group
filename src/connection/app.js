import mySQL from 'mysql2';
import http from 'http';

//Criando conexão com o DB
const connection = mySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvdbaligroup',
});

//Crianddo o Servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar os cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir requisições de qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Cabeçalhos permitidos
  
  //Verificar url
  if(req.url === '/dados' && req.method === 'GET'){
    //Acessando dados
    connection.query('SELECT * FROM fluxo_pagamentos', (err, results) => {
      //tratando erro
      if(err){
        console.log('Falha ao acessar os dados...');
        res.statusCode = 500; //Erro interno do servidor
        res.end(JSON.stringify({ message: 'Erro ao acessar banco de dados'}));
        return;
      }

      //Retornando dados em JSON
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200; //Resposta com êxito
      res.end(JSON.stringify(results));
    })
  }else{
    res.statusCode = 404; //Página não encontrada
    res.end(JSON.stringify({ message: 'Página não encontrada...'}))
  }
});

//Servidor irá escutar na porta 3000
const porta = 3001;
server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});











///////////////////////////////////////////////////////////

//Criar a conexão que será feita no DB
// const connection = mySQL.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mvdbaligroup',
// });

// //Conectando ao DB
// connection.connect((err) =>{
//   if(err){
//     console.log('Erro ao conectar:', err.stack);
//     return;
//   }
//   console.log('Conectado ao banco de dados.');

// });

// //Acessando dados
// connection.query('SELECT * FROM fluxo_pagamentos', (err, results) => {
//   if(err){
//     console.log('Erro ao consultar os dados.');
//     return;
//   }
//   console.log('Resultados:', results)
// });

// //Fechar a conexão
// connection.end();