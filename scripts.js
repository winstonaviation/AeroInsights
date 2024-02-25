var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: 'anp2n0Uce9eAvtLm58Y4igIGsKnhyTTH',
  clientSecret: '2eyrH6qJsAkMqoD5'
});
// What relevant airports are there around a specific location?
amadeus.referenceData.locations.airports.get({
  longitude: 2.55,
  latitude: 49.0000
}).then(function (response) {
  console.log(response);
}).catch(function (response) {
  console.error(response);
});