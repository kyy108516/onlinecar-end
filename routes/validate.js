var express = require('express');
var router = express.Router();
var validate=require('../handle/validate')

/* GET users listing. */
router.get('/addValidate',function (req,res,next) {
    validate.add(req,res,next)
});
router.get('/addValidateItem',function (req,res,next) {
    validate.additem(req,res,next)
});
router.post('/query',function (req,res,next) {
    validate.query(req,res,next)
});
router.get('/updateState',function (req,res,next) {
    validate.updatestate(req,res,next)
});
module.exports = router;