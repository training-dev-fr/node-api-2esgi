const bdd = require('./index');
const relate = require('./relation');

const sync = async () => {
    await relate();
    await bdd.sync({alter: true});
    console.log("Synchronisation réussie");
}

sync();