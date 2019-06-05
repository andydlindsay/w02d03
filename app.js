const express = require('express');
const morgan = require('morgan');

const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// set up the logger
app.use(morgan('dev'));

app.get('/dogs', (request, response) => {
    response.render('index');
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
