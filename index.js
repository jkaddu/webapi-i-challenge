// implement your API here
const express = reqiure('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's working!")
});




server.listen(5000, () => {
    console.log('\n*** API running on port 5k ***\n')
});