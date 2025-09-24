const express = require('express');
const userRoute = require('./route/user.route');
const productRoute = require('./route/product.route');
const relate = require('./model/relation');
require('./model/index');
const app = express();

relate();

app.use(express.json());

app.use('/user', userRoute);
app.use('/product', productRoute);

module.exports = app;