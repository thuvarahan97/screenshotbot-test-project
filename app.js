// module dependencies
var express=require("express");
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var app = express();

//all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// all routes
app.get('/', routes.index);
app.post('/', routes.index);

app.get('/finish', function(req, res){
    res.render('finish');
});

app.listen(process.env.PORT || '8080');