# url-status
> Check is a url if up

# Run the project
### You need nodejs installed. You can isntall it from [here](https://nodejs.org/en/download/)
* Install the npm packages
```sh
$ npm install
```
* Run the server
```sh
$ npm run start
```

* Open your we browser and hit the url `http://127.0.0.1:3000` .

## Description
* `main.js` - Defines routes and is the entry point.
* `lib/checkUrl.js` - Sends a `HEAD` request to a url and returns the response.
* `routes/checkUrl.js` - Calls `lib/checkUrl.js` and analyses the response to check if the url is up.
* `views/` - This dir contains the views that are rendered for display at front end.
