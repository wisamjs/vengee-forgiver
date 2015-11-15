'use strict';

//require the Twilio module and create a REST client
// var client = require('twilio')(process.env.accountSid, process.env.authToken);


var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var app = express();
var router = express.Router();


var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// test route
router.get('/', function (req, res) {
  res.status(200).send('Hello world!');
});

router.post('/forgive', function(req, res, next) {
  forgive(req.body.number);
});

app.use('/', router);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('listening on port ' + port);
});


// function forgive(number) {
//   client.messages.create({
//     to: number,
//     from: "+16474961963",
//     body: "You have been forgiven."
//     },
//     function(err, message) {
//       console.log(message.sid);
//   });
// }
