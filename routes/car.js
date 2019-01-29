var express = require('express');
var router = express.Router();
var car=require('../handle/car')

/* GET users listing. */
router.post('/query', function(req, res, next) {
    car.query(req,res,next);
});
router.get('/deleteCar',function (req,res,next) {
    car.delete(req,res,next)
})
module.exports = router;
