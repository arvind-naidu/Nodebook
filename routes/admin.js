var redis = require('redis');
var url = require('url');

/*
 * GET admin page.
 */

exports.admin = function(req, res){
  redis.client.multi().keys('messages.*', function (err, replies) {
    // NOTE: code in this callback is NOT atomic
    // this only happens after the the .exec call finishes.]

    redis.client.mget(replies, function(err, result) {
      var json = new Array();
      for (var i = 0; i < result.length; i++){
        json.push(result[i])
      }
      res.render('index', {guestMessages:json});
    });
  })
  .exec(function (err, replies) {
    replies.forEach(function (reply, index) {
      
    });
  });
};

exports.approve = function(req, res) {
  var message = redis.client.get("messages." + req.query.id);
  message.approved = true;
  res.send(redis.client.set("messages." + req.query.id, message));
}

exports.unapprove = function(req, res) {
  var message = redis.client.get("messages." + req.query.id);
  message.approved = false;
  res.send(redis.client.set("messages." + req.query.id, message));
}