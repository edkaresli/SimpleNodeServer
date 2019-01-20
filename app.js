const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.json({ message: 'Success!' });
    console.log('Received GET request...');
});

app.listen(PORT, '127.0.0.1', () => {

  console.log('Server is listening on port 3000...');

});