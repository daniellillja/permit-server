var express = require('express');
var router = express.Router();
var questions = require('../lib/questions');
var permits = require('../lib/permits');

router.get('/questions/:id', function(req, res, next) {
  if (questions[req.params.id]) {
    return res.json(questions[req.params.id]);
  }
  res.status(404).send('Question not found');
});

router.get('/questions/', function (req, res, next) {
    return res.json(questions);
});

router.get('/permits/:id', function(req, res, next) {
  if (permits[req.params.id]) {
    return res.json(permits[req.params.id]);
  }
  res.status(404).send('Permit not found');
});

router.get('/prereqs/:id', function(req, res, next) {
  if (prereqs[req.params.id]) {
    return res.json(prereqs[req.params.id]);
  }
  res.status(404).send('Permit not found');
});


module.exports = router;
