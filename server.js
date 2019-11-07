const express = require('express');

const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
   res.status(200).json({ message: 'Server is Running' });
});
server.use('/api/recipes', recipeRouter);

module.exports = server;
