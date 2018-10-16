const request = require('request');

const opts = {
    // What goes in here?
    method: 'get',
    url: 'http://www.google.com/'
}

request(opts, (err, res, body) => {
    // What would cause this if-block to hit?
    if (err) {
        console.log('GOT ERROR', err);
    }
    // If we get a 404 error, why does it go here and
    // not in the if-block above?
    else {
        console.log('GOT res', res);
    }
});