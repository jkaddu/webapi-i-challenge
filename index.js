// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

// server.get('/api/users', (req, res) => {
//     res.send("It's working!")
// });

server.get('/api/users', (req, res) => {
    db.users
    .find(users)
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({ error: error, error: "The users information could not be retrieved." })
    });
});

server.get('/api/users/:id', (req, res) => {
    db.users
    .findById(id)
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(404).res.json({ error: error, error: "The user with the specified ID does not exist." })
    });
});

server.post('/api/users', (req, res) => {
    const usersInfo = req.body;
    console.log('request body: ', userInfo)
    db.users
    .insert(usersInfo)
    .then(users => {
        res.status(201).res.json(users)
    })
    .catch(err => {
        res.status(500).res.json({ error: error, error: "There was an error while saving the user to the database"  })
    });
});

server.delete('/api/users/:id', (req, res) => {
    const usersId = req.params.id;

    db.users
    .remove(usersId)
    .then(deleted => {
        res.status(404).res.json({ message: "The user with the specified ID does not exist." })
    })
    .catch(err => {
        res.status(500).res.json({ error: error, error: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
    db.users
    .update(usersId)
    .then(user => {
        res.status(404).res.json({ message: "The user with the specified ID does not exist." })
    })
    .catch(err => {
        res.status(400).res.json({ error: error, errorMessage: "Please provide name and bio for the user." })
    })
})


server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
});