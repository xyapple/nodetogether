const express = require('express');
const app = express();
var motivations = require('motivations');
const pickOne = require('pick-one');
const exphbs = require('express-handlebars');

app.use(express.static('./app/pubilc'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {

  var motivation = pickOne(motivations);

  response.render('motivation', { motivation: motivation });
});

module.exports = app;
