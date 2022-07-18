const express = require("express");
const routes = express.Router();

const ListContent = require("./listContent");

routes.get("/instruments", ListContent.create);

module.exports = routes;
