'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Public route
app.get('/api/quotes/public', (req, res) => {
    let quotes = [
        
    ];
    res.json(quotes);
});

// private route
app.get('/api/quotes/private', (req, res) => {
    let quotes = [
        // array of public quotes here
    ];
    res.json(quotes);
});

app.listen(3001);
console.log('Serving quotes on localhost:3001');
