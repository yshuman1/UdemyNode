const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);


    request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

https://api.darksky.net/forecast/bda8dc00a416ee094927fd6b89a19565/37.9649458,-121.7232161

module.exports.geocodeAddress = geocodeAddress;