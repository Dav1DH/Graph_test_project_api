var express = require('express');
var router = express.Router();
var dataController = require('../controller/DataController')
/* GET home page. */
router.post('/', function(req, res, next) {
    dataController.add(req, res);
});

router.get('/', function(req, res, next) {
    dataController.getAll(req, res);
});

router.put('/', function(req, res, next) {
    dataController.add(req, res);
});

module.exports = router;
