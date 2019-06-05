const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// database
const dogs = {
    'asdf': 'Tim',
    '14123': 'Jerry',
    '1fgs': 'Sarah',
    'asdfas': 'Rebecca',
};

// set view engine to ejs
app.set('view engine', 'ejs');

// set up the logger
app.use(morgan('dev'));

// add body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Browse
app.get('/dogs', (request, response) => {
    const templateVars = {
        dogs
    };
    response.render('index', templateVars);
});

// Add
app.post('/dogs', (request, response) => {
    const id = request.body.id;
    const name = request.body.name;
    dogs[id] = name;
    response.redirect('/dogs');
});

app.get('/dogs/new', (request, response) => {
    response.render('new_dog');
});

// Read
app.get('/dogs/:id', (request, response) => {
    const templateVars = {
        id: request.params.id,
        dog: dogs[request.params.id]
    };
    response.render('dog', templateVars);
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
