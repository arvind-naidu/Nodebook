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
      res.render('admin', {guestMessages:json});
    });
  })
  .exec(function (err, replies) {
    replies.forEach(function (reply, index) {
      
    });
  });
};

exports.approve = function(req, res) {
  redis.client.get(req.query.id, function(err, result) {
      console.log(result)
      result = JSON.parse(result);
      result.approved = true;
      console.log(result);
      res.send(redis.client.set(req.query.id, JSON.stringify(result)));
  });
  
}

exports.unapprove = function(req, res) {
  redis.client.get(req.query.id, function(err, result) {
      console.log(result)
      result = JSON.parse(result);
      result.approved = false;
      console.log(result);
      res.send(redis.client.set(req.query.id, JSON.stringify(result)));
  });
}