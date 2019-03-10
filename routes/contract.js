var express = require('express');
var router = express.Router();
var contract=require('../handle/contract')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    contract.query(req,res,next);
});
router.post('/queryExpire', function(req, res, next) {
    contract.queryexpire(req,res,next);
});
router.post('/queryItem', function(req, res, next) {
    contract.queryitem(req,res,next);
});
router.get('/deleteContract',function (req,res,next) {
    contract.delete(req,res,next)
});
router.get('/addContract',function (req,res,next) {
    contract.add(req,res,next)
});
router.get('/addContractItem',function (req,res,next) {
    contract.additem(req,res,next)
});
router.get('/updateState',function (req,res,next) {
    contract.updatestate(req,res,next)
});
router.post('/queryExpire', function(req, res, next) {
    contract.queryexpire(req,res,next);
});
module.exports = router;