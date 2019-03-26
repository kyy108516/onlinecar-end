var express = require('express');
var router = express.Router();
var driver=require('../handle/driver')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    driver.query(req,res,next);
});
router.post('/driverExist', function(req, res, next) {
    driver.driverexist(req,res,next);
});
router.get('/deleteDriver',function (req,res,next) {
    driver.delete(req,res,next)
});
router.get('/addDriver',function (req,res,next) {
    driver.add(req,res,next)
});
router.get('/updateDriver',function (req,res,next) {
    driver.update(req,res,next)
});
router.get('/finishContract',function (req,res,next) {
    driver.finishcontract(req,res,next)
});
router.get('/updateState',function (req,res,next) {
    driver.updatestate(req,res,next)
})
module.exports = router;
