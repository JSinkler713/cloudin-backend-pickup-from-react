var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override')
const imagesController = require('./controllers/imagesController');
var app = express();
const cors = require('cors')

// allow from all endpoints
// app.use(cors())

const DEPLOYED_REACT_URL = process.env.DEPLOYED_REACT_URL
console.log(DEPLOYED_REACT_URL)

// allow from only specific endpoints
const corsOptions = { origin: ['http:localhost:3000', `${DEPLOYED_REACT_URL}`]}
app.use(cors(corsOptions))

//app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 4000);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.use('/images', imagesController);  

var port = app.get('port');
app.listen(port, function () {
  console.log('App running at ' + port);
});
