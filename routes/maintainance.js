var express = require('express');
var router = express.Router();
var maintainance=require('../handle/maintainance')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    maintainance.query(req,res,next);
});
router.get('/addMaintainance',function (req,res,next) {
    maintainance.add(req,res,next)
});
module.exports = router;
