var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: 'anp2n0Uce9eAvtLm58Y4igIGsKnhyTTH',
  clientSecret: '2eyrH6qJsAkMqoD5'
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/airportSearch/', function(req,res,next){ 
    amadeus.referenceData.locations.get({ 
      keyword: req.query.term, 
      subType: 'AIRPORT,CITY' 
    }).then(function(response){ 
      res.json(response.data); 
      console.log(response.data.iataCode); 
    }).catch(function(error){ 
      console.log("error"); 
      console.log(error.response); 
    }); 
    }); 
// What relevant airports are there around a specific location?
/*
amadeus.referenceData.locations.hotels.byCity.get({
   cityCode: 'PAR'
  }).then(function (response) {
    console.log(response);
  }).catch(function (response) {
    console.error(response);
  });
*/
