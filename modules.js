let dotenv = require('dotenv').config();

let express = require('express');
let app = express();
module.exports.sls = require('serverless-http');
module.exports.app = app;

let cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));