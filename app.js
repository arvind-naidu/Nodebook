
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();
var redis = require('connect-redis')(express);

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// authentication
var auth = express.basicAuth(function(user, pass) {
 return user === 'testUser' && pass === 'testPass';
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({
  store: new redis({
    host: 'pub-redis-10210.us-east-1-4.1.ec2.garantiadata.com',
    port: 10210,
    db: 1,
    pass: 'hackdayGuestbook'
  }),
  secret: '1234567890QWERTY'
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', auth, routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
