var express = require('express');
var router = express.Router();
//导入mysql
var mysql=require('mysql');
var dbConfig=require('../db/DBConfig');
var userSQL=require('../db/usersql');
var user=require('../handle/user')
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool=mysql.createPool(dbConfig.mysql);
//响应json数据
var responseJSON=function(res,ret){
  if (typeof ret==="undefined"){
    res.send('err')
  } else{
      res.json(ret)
    }
  }

/* GET users listing. */
router.get('/addUser', function(req, res, next) {
  //从连接池获取连接
 pool.getConnection(function (err,connection) {
   //获取前台页面传过来的参数
   var param=req.query||req.params;
   //建立连接 增加一个用户信息
             connection.query(userSQL.insert, [param.user_id,param.user_password], function(err, result) {
                 if(result) {
                     result={
                         code:200,
                         msg:'增加成功'
                     }
                 }
                 // 以json形式，把操作结果返回给前台页面
                 responseJSON(res, result);
             });


     // 释放连接
     connection.release();
 })
});

router.get('/getUser', function(req, res, next) {
  //从连接池获取连接
  pool.getConnection(function (err,connection) {
    var param=req.query||req.params;
    //建立连接 查找一个用户信息
   connection.query(userSQL.queryAll,function (err,result,rese) {
       var isTrue=false;
       var psTrue=false
       if (result){
           for (let i=0;i<result.length;i++){
               if (result[i].username===param.username && result[i].password===param.password){
                   isTrue=true;
                   psTrue=true;
               } else if(result[i].username===param.username && result[i].password!==param.password){
                   isTrue=true;
                   psTrue=false;
               }
           }
       }
       if (isTrue){
           if (psTrue){
               if (rese){
                   rese={
                       msg:'登录成功'
                   }
               }
           }else if (isTrue && !psTrue) {
               if (rese){
                   rese={
                       msg:'密码错误'
                   }
               }
           }
       }else{
           if (rese){
               rese={
                   msg:'用户不存在'
               }
           }
       }
       responseJSON(res,rese)
   })
      connection.release();
  })
});
router.post('/queryFunction',function (req,res,next) {
    user.queryfunction(req,res,next)
});
router.get('/updateFunction',function (req,res,next) {
    user.updatefunction(req,res,next)
});

module.exports = router;
