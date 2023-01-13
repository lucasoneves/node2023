const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'pug');
app.engine('pug', require('pug').__express)
app.set('views', 'views');

const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})) // Body parsing 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);




app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: "Page Not Found"});
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)