var express = require('express');
var app = express.Router();

app.get('/', async (req, res, next)=>{
    let data = await req.DBshowAll("favourites");
    return res.send(data);
  })
  
  app.post('/', async (req, res, next)=>{
    let data =  await req.DBinsert("favourites", req.body );
    return res.send(data);
  })
  
  app.delete('/', async (req, res, next)=>{
    let data = await req.db.collection("favourites").deleteMany({});
    if (data) {
      res.send({
        status: true
      });
    } else {
      res.send({
        status: false
      });
    }
  })

module.exports = app;
