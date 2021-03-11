var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override')
const imagesController = require('./controllers/imagesController');
var app = express();
const cors = require('cors')


// allow from all endpoints
app.use(cors())

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
