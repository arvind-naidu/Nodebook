var redis = require('redis');

exports.savePost = function(req, res) {
  //var GuestMessage = {"message": "Hello there Team Awesome!", "email": "email@mail.com", "name": "Rose", "entryDate": "11/15/2013", "approved": "False"};
  var GuestMessage = {};
  GuestMessage.message = req.body.message;;
  GuestMessage.email = req.body.email;
  GuestMessage.name = req.body.name;
  GuestMessage.entryDate = new Date();
  GuestMessage.approved = false;
  
  redis.client.incr('counter', function(err, unique) {
    GuestMessage.key = "messages." + unique;
	var result = setPost(unique, GuestMessage);
	console.log(result);
	res.redirect('/');
  });
};

function setPost (unique, data) {
	redis.client.set("messages." + unique, JSON.stringify(data));
}