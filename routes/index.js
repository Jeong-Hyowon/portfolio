var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Express' });
});
router.get('/activity', function(req, res, next) {
  res.render('activity', { title: 'Express' });
});

module.exports = router;
