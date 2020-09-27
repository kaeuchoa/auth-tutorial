'use strict';

const express = require('express');
const app = express();

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://kaeuchoa.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3001',
    issuer: 'https://kaeuchoa.us.auth0.com/',
    algorithms: ['RS256']
});

//Public route
app.get('/api/quotes/public', (req, res) => {
    let quotes = [
        {
            id: 123,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 123,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
        {
            id: 124,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 123,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
        {
            id: 125,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 123,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
    ];
    res.json(quotes);
});

// private route
app.get('/api/quotes/private', authCheck, (req, res) => {
    let quotes = [
        // array of private quotes here
        {
            id: 234,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 125,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
        {
            id: 235,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 125,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
        {
            id: 236,
            body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            user: {
                id: 125,
                age: 20
            },
            upVotes: 0,
            toAge: 13
        },
    ];
    res.json(quotes);
});

app.listen(3001);
console.log('Serving quotes on localhost:3001');
