const request = require('request');


var getWeather = (Latitude,Longitude,callback) => {
    request({
        url:`https://api.darksky.net/forecast/71a6bc98976c02d524456377f33c18c1/${Latitude},${Longitude}?units=si`,
          // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
          json:true
      },(error,response,body) => {
        if(!error && response.statusCode == 200) {
            callback(undefined,{
                temperature:body.currently.temperature
            });
        } else  {
            callback('Unable to fetch weather');
        } 
        
      })
}

module.exports.getWeather=getWeather;