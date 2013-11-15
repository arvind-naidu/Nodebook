
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { name: 'the index page', temp: 'test' });
};