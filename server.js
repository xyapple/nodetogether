const express = require('express');
const app = express();
const port = process.env.PORT || '8080';
const host = process.env.HOST ||'0.0.0.0';

var rules = require('./app/index.js');

app.use(rules);

app.listen(port, host);


console.log('Server running %s:%d...', host, port)



