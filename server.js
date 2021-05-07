const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

const fetch = require('node-fetch');

app.use(cors())


app.get('/', (req, res) => {


    console.log(req.query);

    const api = `http://api.weatherapi.com/v1/current.json?key=fb8624aa56924102878134923210605&q=${req.query.q}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            res.send(data)
        })

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})