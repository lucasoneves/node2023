const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;


// o método createServer cria um servidor http e o retorna.
const server = http.createServer((req, res) => {
  res.statusCode = 200; // seta a propriedade pra indicar uma resposta com sucesso
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n"); // fecha a resposta, adiciona o conteúdo ao argumento end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
