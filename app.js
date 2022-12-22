const express = require("express");
const http = require("http");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
	res.send('<h2>Hello from Express</h2>');
});
const server = http.createServer(app);

server.listen(3000);
