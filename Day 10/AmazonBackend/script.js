const express = require("express");
const recipeRouter = require('./recipeRoutes.js');
const app = express();

app.use('/api/recipe', recipeRouter);

const url = "mongodb+srv://vikhyatgarg9690:<password>@cluster0.qk874z8.mongodb.net/_$DB_NAME$_?retryWrites=true&w=majority&appName=Cluster0";

const databaseUser = 'Vikhyat';
const databasePassword = 'DNYJ0RKOFrOi34uM';
const databaseName = 'Amazon-Backend';

let dblink = url.replace("_$DB_NAME&_", databaseName);
dblink = url.replace("<password>", databasePassword);

mongoose.connect(dblink)
.then(
    () => console.log(".......Database Connected........")
);

app.listen(1400,
    () => console.log("..........App Started.........")
);