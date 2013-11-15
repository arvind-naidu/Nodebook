// data interaction routes

exports.savePost = function(req, res) {
  var newPost = {};
  //newPost.FullName = req.body['todo-text'];
  newPost.FullName = "Rose McCluskey";
  //newPost.Email = req.Email;
  newPost.Email = "rmccluskey@hsc.wvu.edu";
  //newPost.Entry = req.Entry;
  newPost.Entry = "New Entry!";
  newPost.EntryDate = new Date();
  newPost.Approved = false;
  
  client.SADD("Entry", newPost);
  res.redirect('/');
};

exports.getPosts = function(req, res) {
	
};