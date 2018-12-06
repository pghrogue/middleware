// create an express server with an endpoint for GET at /
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const customMW = require('./middleware.js');

const server = express();
const PORT = process.env.PORT || 5454;

// Middleware
server.use( 
  express.json(),
  morgan('tiny'),
  helmet() 
);
server.use( customMW.gatekeeper );

//Route handler endpoint for GET:
server.get('/', (req,res) => {
  res.json({message: "Still Got it!"});
});

// Listen:
server.listen( PORT, () => {
  console.log( `Server started on port: ${PORT}!`);
});