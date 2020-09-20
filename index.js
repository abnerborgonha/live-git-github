const express = require('express');

const app = express();

app.get('/teste', (request, response) => {
    return response.json({hello: 'world'});
});

app.listen(3333);