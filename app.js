const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})) // Body parsing 

app.use(adminRoutes);

app.use(shopRoutes);


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)