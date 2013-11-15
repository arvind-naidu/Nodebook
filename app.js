
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var routes = require('./routes');
var login = require('./routes/login');
var admin = require('./routes/admin');
var data = require('./routes/data');
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
  admin: { name: 'admin', pass: 'admin' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)
hash('foobar', function(err, salt, hash) {
  if (err) throw err;
  // store the salt & hash in the "db"
  users.admin.salt = salt;
  users.admin.hash = hash;
});

// Authenticate using our plain-object database of doom!
function authenticate(name, pass, fn) {
  if (!module.parent) console.log('authenticating %s:%s', name, pass);
  var user = users[name];
  // query the db for the given username
  if (!user) return fn(new Error('cannot find user'));


  if (pass == user.pass) return fn(null, user);

  fn(new Error('invalid password'));
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
app.post('/login', function(req, res) {
  authenticate(req.body.username, req.body.password, function(err, user){
    if (user) {
      // Regenerate session when signing in
      // to prevent fixation 
      req.session.regenerate(function(){

        console.log(user);

        // Store the user's primary key 
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        req.session.success = 'Authenticated as ' + user.name
          + ' click to <a href="/logout">logout</a>. '
          + ' You may now access <a href="/admin">/restricted</a>.';
        res.redirect('admin');
      });
    } else {
      req.session.error = 'Authentication failed, please check your '
        + ' username and password.'
        + ' (use "admin" and "admin")';
      res.redirect('login');
    }
  });
});
app.get('/admin', restrict, admin.admin);
app.get('/savePost', data.savePost);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
