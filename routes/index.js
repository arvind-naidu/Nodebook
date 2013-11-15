var redis = require('redis');

/*
 * GET home page.
 */

exports.index = function(req, res){
	redis.client.multi().keys('messages.*', function (err, replies) {
		// NOTE: code in this callback is NOT atomic
		// this only happens after the the .exec call finishes.]

		redis.client.mget(replies, function(err, result) {
			var json = new Array();
			if (!result) {
				res.render('index', {guestMessages:json});
				return;
			}			
			for (var i = 0; i < result.length; i++){
				var jsonObject = JSON.parse(result[i]);
				if(jsonObject.approved == true) {
					json.push(result[i]);
				}
			}
			res.render('index', {guestMessages:json});
		});
	})
	.exec(function (err, replies) {
		replies.forEach(function (reply, index) {
			
		});
	});
};
