const express = require('express');
const app = express();
var motivations = require('motivations');


app.get("/", function(request, response) {

  response.send (motivations);

});

module.exports = app;
