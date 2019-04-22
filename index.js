// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

// server.get('/api/users', (req, res) => {
//     res.send("It's working!")
// });

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({ error: error, error: "The users information could not be retrieved." })
    });
});

server.get('/api/users/:id', (req, res) => {
    db
    .findById(id)
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(404).json({ error: error, error: "The user with the specified ID does not exist." })
    });
});

server.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log('request body: ', newUser)
    db
    .insert(newUser)
    .then(users => {
        res.status(201).json(users)
    })
    .catch(err => {
        res.status(500).json({ error: error, error: "There was an error while saving the user to the database"  })
    });
});

server.delete('/api/users/:id', (req, res) => {
    const usersId = req.params.id;

    db
    .remove(usersId)
    .then(deleted => {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    })
    .catch(err => {
        res.status(500).json({ error: error, error: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
    db
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