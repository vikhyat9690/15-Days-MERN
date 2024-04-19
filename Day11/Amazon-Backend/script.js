const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const app = express();
const test = require('./models/productsModel.js')
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/products', productsRouter)

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.qk874z8.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'vikhyatgarg9690';
const databasePassword = 'Vikhyat9690';
const databaseName = 'Amazon-Backend';

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink)
  .then(
    () => console.log('-------- Database Connected --------')
);

app.listen(1400,
    () => console.log('----------- App Started -----------')
);
