
/*
 * GET home page.
 */

exports.index = function(req, res){
  var messages = {
    "guestMessages": [
        {
            "message": "test",
            "email": "test@gmail.com",
            "name": "Jack",
            "entryDate": "12/12/12",
            "status": true
        }
    ]
};

  res.render('index', messages);
};