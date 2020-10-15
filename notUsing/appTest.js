const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bearerToken = require("express-bearer-token");
const cors = require("cors");

const { frontendUrl } = require("./config/index");
const router = require("./routes/index");

const app = express();

const home = require('./routes/index');
const login = require('./routes/login');
const shop = require('./routes/shop');
const signUp = require('./routes/signUp');
const styles = require('./routes/styles');
const wantList = require('./routes/wantList');
const users = require('./routes/users');

app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: frontendUrl }));
app.use(bearerToken());

app.use("/api", router);

app.use('/', login);
app.use('/shop', shop);
app.use('/signup', signUp);
app.use('/styles', styles);
app.use('/wantlist', wantList);
app.use('/users', users);

//before error handling
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;