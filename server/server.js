require('./config/config.js');

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario.js'))

mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (err, resp) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});