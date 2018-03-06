var express = require("express"),
var bp = require("body-parser"),
var cors = require("cors")
  
require("./db/mlab-config");

var server = express()
var port = 3000
  

// var authRoutes = require('./auth/routes')
var generalRoutes = require('./auth/general')
var personalRoutes = require('./auth/personal')
var session = require("./auth/session")

server.use(cors())
server.use(session)
server.use(bp.json())
server.use(bp.urlencoded({ 
  extended: true 
}));

//Your routes here
server.use(authRoutes)
// server.use(generalRoutes);
// server.use(personalRoutes);

//catch all errors
server.use("*", (error, req, res, next) => {
    res.status(400).send(error);
  });
  console.log("top level index.js")

server.listen(port, () => {
    console.log("the server is running... Port:", port);
  });