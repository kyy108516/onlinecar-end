var express = require('express');
var router = express.Router();
var contract=require('../handle/contract')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    contract.query(req,res,next);
});
router.post('/querySettle', function(req, res, next) {
    contract.querysettle(req,res,next);
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
router.post('/queryDetain', function(req, res, next) {
    contract.querydetain(req,res,next);
});
router.post('/querySettleItem', function(req, res, next) {
    contract.querysettleitem(req,res,next);
});
router.get('/updateDetain',function (req,res,next) {
    contract.updatedetain(req,res,next)
});
router.get('/updateSettle',function (req,res,next) {
    contract.updatesettle(req,res,next)
});
router.get('/updateSettleFinance',function (req,res,next) {
    contract.updatesettlefinance(req,res,next)
});
router.get('/addDetain',function (req,res,next) {
    contract.adddetain(req,res,next)
});
router.get('/DetainAccident',function (req,res,next) {
    contract.detainaccident(req,res,next)
});
router.get('/DetainViolation',function (req,res,next) {
    contract.detainviolation(req,res,next)
});
router.get('/addSettleItem',function (req,res,next) {
    contract.addsettleitem(req,res,next)
});
module.exports = router;