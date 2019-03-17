var express = require('express');
var router = express.Router();
var car=require('../handle/car')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    car.query(req,res,next);
});
router.post('/queryViolation', function(req, res, next) {
    car.queryviolation(req,res,next);
});
router.get('/deleteCar',function (req,res,next) {
    car.delete(req,res,next)
});
router.get('/deletePartner',function (req,res,next) {
    car.deletepartner(req,res,next)
});
router.get('/addCar',function (req,res,next) {
    car.add(req,res,next)
});
router.get('/updateCar',function (req,res,next) {
    car.update(req,res,next)
});
router.get('/finishContract',function (req,res,next) {
    car.finishcontract(req,res,next)
});
router.get('/updateState',function (req,res,next) {
    car.updatestate(req,res,next)
});
router.get('/queryInsurance',function (req,res,next) {
    car.queryinsurance(req,res,next)
});
router.get('/queryPartner',function (req,res,next) {
    car.querypartner(req,res,next)
});
router.get('/addInsurance',function (req,res,next) {
    car.addinsurance(req,res,next)
});
router.post('/Partner',function (req,res,next) {
    car.partner(req,res,next)
});
router.get('/addPartner',function (req,res,next) {
    car.addpartner(req,res,next)
});
router.get('/updatePartner',function (req,res,next) {
    car.updatepartner(req,res,next)
});
router.get('/updateViolation',function (req,res,next) {
    car.updateviolation(req,res,next)
});
router.get('/addViolation',function (req,res,next) {
    car.addviolation(req,res,next)
});
router.post('/queryInsuranceRemind',function (req,res,next) {
    car.queryinsuranceremind(req,res,next)
});
router.get('/updateInsurance',function (req,res,next) {
    car.updateinsurance(req,res,next)
});
module.exports = router;
