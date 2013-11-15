
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var routes = require('./routes');
var login = require('./routes/login');
var admin = require('./routes/admin');
var app = express();
var redis = require('redis');
var http = require('http');
var path = require('path');
var hash = require('./pass').hash;

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

// redis stuff
/*
app.use(express.session({
  store: new connection({
    host: 'pub-redis-10210.us-east-1-4.1.ec2.garantiadata.com',
    port: 10210,
    db: 1,
    pass: 'hackdayGuestbook'
  }),
  secret: '1234567890QWERTY'
}));
*/
var client = redis.createClient(10210, 'pub-redis-10210.us-east-1-4.1.ec2.garantiadata.com');
client.auth("hackdayGuestbook", function() {console.log("Connected!");});

// session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error
    , msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

// dummy user database
var users = {
  admin: { name: 'admin' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)
hash('foobar', function(err, salt, hash) {
  if (err) throw err;
  // store the salt & hash in the "db"
  users.admin.salt = salt;
  users.admin.hash = hash;
});

// authenticate using our plain-object database of doom!
function authenticate(name, pass, fn) {
  if (!module.parent) console.log('authenticating %s:%s', name, pass);
  var user = users[name];
  // query the db for the given username
  if (!user) return fn(new Error('cannot find user'));
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  hash(pass, user.salt, function(err, hash){
    if (err) return fn(err);
    if (hash == user.hash) return fn(null, user);
    fn(new Error('invalid password'));
  })
}

// used to restrict pages
function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// actions
app.get('/', routes.index);
app.get('/login', login.login);
app.post('/login', login.loginPost);
app.get('/admin', restrict, admin.admin);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
