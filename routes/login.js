
/*
 * GET login page.
 */

exports.login = function(req, res){
  res.render('login', { title: 'the login page', temp: 'test' });
};