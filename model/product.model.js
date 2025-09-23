const {DataTypes} = require('sequelize');
const db = require('./index');

const Product = db.define('Product',{
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DECIMAL(10,2)
    }
},{
    tableName: "product"
});

module.exports = Product;