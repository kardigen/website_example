
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index')
};

exports.products = function(req, res){
  res.render('products')
};

exports.services = function(req, res){
  res.render('services')
};

exports.clients = function(req, res){
  res.render('clients')
};

exports.contact = function(req, res){
  res.render('contact')
};