const request = require('request');
const Promise = require('bluebird');

// Function to hit a url and fetch the response.
module.exports = (url) => {
	return new Promise((resolve, reject) => {
		if(!url) {
			return reject('Error: Not a valid url !');
		}
		request.head(url, (err, res) => {
			if(err) {
				return reject(`${err.message}`);
			}
			return resolve(res);
		});
	});
}
