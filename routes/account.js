var express = require('express');
var router = express.Router();
var account=require('../handle/account')

/* GET users listing. */
router.post('/queryReceivable', function(req, res, next) {
    account.queryreceivable(req,res,next);
});
router.post('/queryPractical', function(req, res, next) {
    account.querypractical(req,res,next);
});
router.post('/queryBill', function(req, res, next) {
    account.querybill(req,res,next);
});
router.post('/queryDeatil', function(req, res, next) {
    account.querydetail(req,res,next);
});
// router.get('/addMaintainance',function (req,res,next) {
//     accident.add(req,res,next)
// });
module.exports = router;
