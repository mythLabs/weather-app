const request = require('request');
const yargs =require('yargs');

const argv =yargs
   .options({
     a:{
       demand:true,
       alias:'address',
       describe:'Address to fetch weather for',
       string:true
     }
   })
   .help()
   .alias('help','h')
   .argv;

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`,
    // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json:true
},(error,response,body) => {
  // console.log(JSON.stringify(response,undefined,2));
  if(error) {
    console.log('unable to connect to google server');
  } else if(body.status === 'ZERO_RESULTS') {
    console.log('unable to find that address');
  } else if(body.status === 'OK') {
    console.log(`Address:${body.results[0].formatted_address}`);
    console.log(`Latitude:${body.results[0].geometry.location.lat}`);
    console.log(`Longitude:${body.results[0].geometry.location.lng}`);
  }
  
})