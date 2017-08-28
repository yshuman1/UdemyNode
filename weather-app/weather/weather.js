const request = require('request');

var getWeather = (lat, lng, callback ) => {
    request({
        url: `https://api.darksky.net/forecast/bda8dc00a416ee094927fd6b89a19565/${lat},${lng}`,
        json: true
    }, (error, response, body) =>{
        if (!error && response.statusCode === 200) {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable to fetch weather.');
        }
    });
    
    
    
}

module.exports.getWeather = getWeather;