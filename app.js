const express = require('express');
const userRoute = require('./route/user.route');
const productRoute = require('./route/product.route');
require('./model/index');
const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/product', productRoute);

module.exports = app;