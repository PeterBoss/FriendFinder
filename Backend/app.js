const express = require('express');
const app = express();
const register = require('./facade/FriendFacade');
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Friend Finder Demo!')
})

app.post('/api/friends/register/:distance', function(req, res) {
    let userName = req.body.userName;
    let coordinates = req.body.loc.coordinates;
    let distance = Number(req.params.distance);

    register(userName, coordinates, distance, function(err,docs){
      if(err){
        return console.log("ERROR",err)
      }
      res.send(JSON.stringify(docs,null,"  "));
    });
});

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})