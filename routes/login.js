
/*
 * GET login page.
 */

exports.login = function(req, res) {
  res.render('login', { name: 'the login page', temp: 'test' });
};
