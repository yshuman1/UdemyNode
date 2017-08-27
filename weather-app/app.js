// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//     .options({
//         a: {
//             demand:true,
//             alias: 'address',
//             describe: 'address to fetch weather for',
//             string: true
//         }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
        
//     }
// });

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/bda8dc00a416ee094927fd6b89a19565/37.9649458,-121.7232161`,
    json: true
}, (error, response, body) =>{
    console.log(body.currently.temperature);
    
});




