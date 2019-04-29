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
        res.status(500).json({ error: "The users information could not be retrieved." })
    });
});

server.get('/api/users/:id', (req, res) => {
    db
    .findById(id)
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(404).json({ error: "The user with the specified ID does not exist." })
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
        res.status(500).json({ error: "There was an error while saving the user to the database"  })
    });
});

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db
    .remove(id)
    .then(deleted => {
        if(deleted === 0){
            res.status(404).json({ error: "The user with the specified ID does not exist." })
        }
        res.status(204).json.end()
    })
    .catch(err => {
        res.status(500).json({ error: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const user = req.body;

    if(!user.name || !user.bio) 
        return res.status(404).json({ error: "Please provide name and bio for the user. "})
        .end();

    db
    .update(id, user)
    .then(user => {
        // check if exist 
        if(!user) 
            return res.status(404).json({ error: "The user with the specified ID doesn't exist" });
            return res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Please provide name and bio for the user." })
    })
})


server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
});