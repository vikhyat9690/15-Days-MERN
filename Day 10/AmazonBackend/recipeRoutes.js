const express = require("express");
const recipeController = require('../controller/recipeController.js');
const recipeRouter = express.Router();

recipeRouter.route('/')
.get(recipeController.getAllRecipes);

module.exports = recipeRouter;