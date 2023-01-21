const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");
app.engine("pug", require("pug").__express);
// app.set('view engine', 'ejs');
// app.set('views', 'views');

const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { get404Page } = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false })); // Body parsing

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use(get404Page);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
