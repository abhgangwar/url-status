const express = require('express');
const bodyParser = require('body-parser')

const checkUrl = require('./routes/checkUrl');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ===================
// All routes here
// ===================
app.get('/', (req, res) => {
    res.render('index', { title: 'Check if a url is up', message: 'Hello there!' })
});
app.post('/check-url', checkUrl);

app.listen(3000, () => {
    console.log('Server running at port 3000');
});
