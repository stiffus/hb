var express = require('express');
var timesData = require('../public/javascripts/businesslogic/nyTimesCreate');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {

  let showVal = await timesData();
  res.render('index', { store: showVal, title: showVal.source });
});

module.exports = router;