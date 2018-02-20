// Function to hit a url and fetch the resposne.
const checkUrl = require('../lib/checkUrl');

module.exports = (req, res) => {
    // Send error if url isn't valid
    if(!req.body.url) {
        return res.render('status', {message: "Error: Please enter a valid url"});
    }

    /*
    * Check the response status or any other error.
    * @options Object takes two params - url to check and number of attempts
    * we made to check the url status. If an url fails, we retry for it 3 times
    * and if url still fails, we send status that url isn't working.
    */
    const checkUrlHelper = (options) => {
        return checkUrl(options.url)
            .then(data => {
                if(data.statusCode && data.statusCode === 200) {
                    return res.render('status', {message: 'url is up and working'});
                }
                throw `Url failed with status ${data.statusCode}`;
            })
            .catch(e => {
                if(options.attempts < 3) {
                    ++options.attempts;
                    return checkUrlHelper(options);
                }
                return res.render('status', {message: `Error: ${e}`});
            });
    }
    checkUrlHelper({url: req.body.url, attempts: 0});
}
