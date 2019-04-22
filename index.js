// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
    res.send("It's working!")
});

server.get('/api/users', (req, res) => {
    db.user
    .find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    });
});

server.get('/api/users/:id', (req, res) => {
    db.users
    .find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    });
});

server.post('/api/user', (req, res) => {
    const userInfo = req.body;
    console.log('request body: ', userInfo)
    db.users
    .add(userInfo)
    .then(users => {
        res.status(201).res.json(users)
    })
    .catch(err => {
        res.status(500).res.json({ error: "There was an error while saving the user to the database"  })
    });
});



server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
});