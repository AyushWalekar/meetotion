var express = require('express');
var router = express.Router();

var config = {
    version: 1,
    port: 5600,
    mongo: {
        local: 'mongodb://localhost:27017/meetotion',
        dbName: 'meetotion'
    },
}

module.exports = config;