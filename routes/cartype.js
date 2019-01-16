var express = require('express');
var router = express.Router();
var cartype=require('../handle/cartype')

/* GET users listing. */
router.get('/queryAll', function(req, res, next) {
    cartype.queryAll(req,res,next);
});
router.get('/deleteCartype',function (req,res,next) {
    cartype.delete(req,res,next)
});
router.get('/addCartype',function (req,res,next) {
    cartype.add(req,res,next)
});
module.exports = router;
