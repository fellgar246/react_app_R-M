require("dotenv").config();
const express = require('express');
const cors = require("cors");
const morgan = require("morgan")

const router = require("../src/routes/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"))
server.use(cors());
server.use("/rickandmorty", router);

module.exports = server;