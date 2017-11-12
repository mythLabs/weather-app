const request = require('request');


var geocodeAddress = (Address,callback) => {
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(Address)}`,
          // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
          json:true
      },(error,response,body) => {
        // console.log(JSON.stringify(response,undefined,2));
        if(error) {
            callback('unable to connect to google server');
          //console.log('unable to connect to google server');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
          //console.log('unable to find that address');
        } else if(body.status === 'OK') {
            callback(undefined,{
                address:body.results[0].formatted_address,
                Latitude:body.results[0].geometry.location.lat,
                Longitude:body.results[0].geometry.location.lng
            });
        //   console.log(`Address:${body.results[0].formatted_address}`);
        //   console.log(`Latitude:${body.results[0].geometry.location.lat}`);
        //   console.log(`Longitude:${body.results[0].geometry.location.lng}`);
        }
        
      })
}

module.exports.geocodeAddress=geocodeAddress;