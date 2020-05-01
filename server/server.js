var express = require('express');
var app = express();
var cors = require('cors')
var request = require('request');
var apikey = require('./api-key');

// use cors to get around any cors errors
app.use(cors())

// make a request to a third party api and send the data to our front end
app.get('/', function (req, res) {
  request("https://api.weatherapi.com/v1/forecast.json?key="+apikey.key+"&q=London&days=5", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
