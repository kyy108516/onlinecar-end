var express = require('express');
var router = express.Router();
var user=require('../handle/user')

/* GET users listing. */
router.post('/queryFunction',function (req,res,next) {
    user.queryfunction(req,res,next)
});
router.post('/query',function (req,res,next) {
    user.query(req,res,next)
});
router.post('/queryRole',function (req,res,next) {
    user.queryrole(req,res,next)
});
router.get('/updateFunction',function (req,res,next) {
    user.updatefunction(req,res,next)
});
router.get('/updateUser',function (req,res,next) {
    user.updateuser(req,res,next)
});
router.get('/addUser',function (req,res,next) {
    user.adduser(req,res,next)
});
router.get('/deleteUser',function (req,res,next) {
    user.deleteuser(req,res,next)
});
router.post('/queryRoleMenu',function (req,res,next) {
    user.queryrolemenu(req,res,next)
});

module.exports = router;
