
/*
 * GET admin page.
 */

exports.admin = function(req, res){
  res.render('admin', { title: 'the admin page', temp: 'test' });
};