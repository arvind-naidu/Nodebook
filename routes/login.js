
/*
 * GET login page.
 */

exports.login = function(req, res) {
  res.render('login', { session: req.session });
};
