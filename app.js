
const yargs =require('yargs');
const geocode =require('./geocode/geocode.js')
const weather =require('./weather/weather.js')

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

   geocode.geocodeAddress(argv.a,(errorMessage,results) => {
         if(errorMessage) {
                console.log(errorMessage);
         } else if(results) {
          console.log(results.address);
           weather.getWeather(results.Latitude,results.Longitude,(errorMessage,result) => {
                 if(errorMessage) {

                 } else if(result) {
                   console.log(`It's currently ${result.temperature}`);
                 }
           });
          //console.log(JSON.stringify(results,undefined,2));
         }
   });

    
