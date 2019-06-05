const express = require('express');

const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

app.get('/dogs', (request, response) => {
    response.render('index');
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
