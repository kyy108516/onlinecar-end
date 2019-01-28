// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var carSQL=require('../db/carsql');
// 引入json模块
var json = require('../json/car');

var carData={
    queryAll:function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //建立连接 得到车辆表
            connection.query(carSQL.query, function(err, result) {
                if(result!='') {
                    var _result=result;
                    result={
                        result:'selectall',
                        data:_result
                    }
                }else{
                    result=undefined;
                }
                // 以json形式，把操作结果返回给前台页面
                json(res,result);
            });
            // 释放连接
            connection.release();
        })
    },
    delete:function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取前台页面传过来的参数
            var param=req.query||req.params;
            connection.query(carSQL.delete,param.id,function(err, result) {
                if(result.affectedRows>0) {//mysql执行影响的行数大于0
                    result='delete'
                }else{
                    result=undefined;
                }
                // 以json形式，把操作结果返回给前台页面
                json(res,result);
            });
            // 释放连接
            connection.release();
        })
    }
}

module.exports=carData
