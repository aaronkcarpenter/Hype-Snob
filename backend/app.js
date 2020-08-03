const express = require('express');

const login = require('./routes/login');
const shop = require('./routes/shop');
const signUp = require('./routes/signUp');
const style = require('./routes/styles');
const wantList = require('./routes/wantList');

const app = express();



app.use(login);
app.use(shop);
app.use(signUp);
app.use(style);
app.use(wantList);


const port = 8080;
app.listen(port, () => console.log(`Currently listening on port ${port}...`));