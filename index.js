const express = require('express')
var cors = require('cors')
const app = express()
require('dotenv').config()
var mongoSrivice = require('httpmongodb');
const Fetch = require('node-fetch');
const Bluebird = require('bluebird');
Fetch.Promise = Bluebird;



const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('My Movie Search API!')
})

app.use(mongoSrivice("Asia/Kolkata", true));
app.use(express.json());

app.use(cors())
app.get('/search/:keyword', (req, res, next)=>{
    Fetch(`http://www.omdbapi.com/?s=${req.params.keyword}&apikey=5cb03411`)
    .then(res => res.json())
    .then(json => res.send({status: true, Search: json.Search}));
})


app.use('/favourites', require("./favourites"))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})