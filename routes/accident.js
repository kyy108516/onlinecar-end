var express = require('express');
var router = express.Router();
var accident=require('../handle/accident')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    accident.query(req,res,next);
});
router.get('/add',function (req,res,next) {
    accident.add(req,res,next)
});
router.get('/addItem',function (req,res,next) {
    accident.additem(req,res,next)
});
router.get('/addReparation',function (req,res,next) {
    accident.addreparation(req,res,next)
});
router.get('/update',function (req,res,next) {
    accident.update(req,res,next)
});
router.post('/queryItem', function(req, res, next) {
    accident.queryitem(req,res,next);
});
router.post('/queryReparation', function(req, res, next) {
    accident.queryreparation(req,res,next);
});
module.exports = router;
