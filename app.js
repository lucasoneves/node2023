const express = require("express");

const app = express();
app.use('/add-product', (req, res, next) => {
  console.log("In another middleware");
	res.send('<h2>Add Product Page</h2>');
});

app.use('/', (req, res, next) => {
  console.log("In another middleware");
	res.send('<h2>Hello from Express</h2>');
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)