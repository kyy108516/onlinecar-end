var express = require('express');
var router = express.Router();
var accident=require('../handle/accident')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    accident.query(req,res,next);
});
// router.get('/addMaintainance',function (req,res,next) {
//     accident.add(req,res,next)
// });
module.exports = router;
