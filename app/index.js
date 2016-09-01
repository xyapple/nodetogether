const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

const pickOne = require('pick-one');
const motivations = require('motivations');
const catImages = [1, 2, 3, 4, 5, 6];


app.get('/', function(request, response) {
  var motivation = pickOne(motivations);
<<<<<<< HEAD
  var image = pickOne(natImages);

  response.render('motivation', { motivation: motivation, image: image });
=======
  var image = pickOne(catImages);
  response.render('motivation', { motivation, image });
>>>>>>> b94f6a30f21f94e90b568c5779a66115163da139
});

module.exports = app;
