var express = require('express');
var router = express.Router();
var home=require('../handle/home')

/* GET users listing. */
router.post('/allCar', function(req, res, next) {
    home.allcar(req,res,next);
});
router.post('/kucunCar', function(req, res, next) {
    home.kucuncar(req,res,next);
});
router.post('/yunyingCar', function(req, res, next) {
    home.yunyingcar(req,res,next);
});
router.post('/allDriver', function(req, res, next) {
    home.alldriver(req,res,next);
});
router.post('/qianyueDriver', function(req, res, next) {
    home.qianyuedriver(req,res,next);
});
router.post('/yuqiDriver', function(req, res, next) {
    home.yuqidriver(req,res,next);
});
router.post('/zsr', function(req, res, next) {
    home.zsr(req,res,next);
});
router.post('/zzc', function(req, res, next) {
    home.zzc(req,res,next);
});
router.post('/sr', function(req, res, next) {
    home.sr(req,res,next);
});
router.post('/zc', function(req, res, next) {
    home.zc(req,res,next);
});
module.exports = router;
