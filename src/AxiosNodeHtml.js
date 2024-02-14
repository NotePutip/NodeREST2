const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');

const base_url = "http://localhost:3000";

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books');
        res.render("books", {books: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error')
    }
});