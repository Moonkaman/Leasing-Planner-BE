const server = require('express')();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => res.send('We have achieved lift off!'));

module.exports = server;