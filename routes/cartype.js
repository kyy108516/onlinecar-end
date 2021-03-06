var express = require('express');
var router = express.Router();
var cartype=require('../handle/cartype')

/* GET users listing. */
router.get('/queryAll', function(req, res, next) {
    cartype.queryAll(req,res,next);
});
router.post('/query', function(req, res, next) {
    cartype.query(req,res,next);
});
router.get('/deleteCartype',function (req,res,next) {
    cartype.delete(req,res,next)
});
router.get('/addCartype',function (req,res,next) {
    cartype.add(req,res,next)
});
router.get('/selectCartype',function (req,res,next) {
    cartype.queryById(req,res,next)
});
router.get('/updateCartype',function (req,res,next) {
    cartype.update(req,res,next)
});
module.exports = router;
