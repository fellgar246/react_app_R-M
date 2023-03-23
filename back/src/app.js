const express = require('express');
const cors = require("cors");
const server = express();
const router = require("../src/routes/index");

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);

module.exports = server;