// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's working!")
});

server.post('/hubs', (req, res) => {
    const hubInfo = req.body;
    console.log('request body: ', hubInfo)
    db.hubs
    .add(hubInfo)
    .then(hub => {
        res.status(201).res.json(hub)
    })
    .catch(err => {
        res.status(500).res.json({ error: error, message: 'Something broke' })
    })

})


server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
});