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
    query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到车辆表
            var data=req.body
            var sql=carSQL.query
            if (data.id!=0){
                sql+=" and a.id="+data.id
            }else if (data.id==="0"){
                json(res,undefined)
                return
            }
            if (data.license!=''){
                sql+=" and license="+"'"+data.license+"'"
            }
            if(data.vin !=''){
                sql+=" and vin="+"'"+data.vin+"'"
            }
            if(data.model!=''){
                sql+=" and model="+"'"+data.model+"'"
            }
            if(data.state!=''){
                sql+=" and state="+"'"+data.state+"'"
            }
            console.log(sql)
            connection.query(sql, function (err, result) {
                if (result != '') {
                    var _result = result;
                    result = {
                        result: 'select',
                        data: _result
                    }
                } else {
                    result = undefined;
                }
                // 以json形式，把操作结果返回给前台页面
                json(res, result);
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
    },
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.add, [param.license,param.vin,param.cartype], function (err, result) {
                if (result) {
                    result = 'add'
                } else {
                    result = undefined;
                }
                // 以json形式，把操作结果返回给前台页面
                json(res, result);
            });
            // 释放连接
            connection.release();
        })
    },
    update: function (req, res, next) {
        var param = req.query || req.params;
        if (param.license == null || param.id == null) {
            json(res, undefined);
            return;
        }
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.update, [param.license,param.vin,param.cartype,param.id], function (err, result) {
                if (result.affectedRows>0) {
                    var _result = result;
                    result ='update'
                } else {
                    result = undefined;
                }
                // 以json形式，把操作结果返回给前台页面
                json(res, result);
            });
            // 释放连接
            connection.release();
        })
    },
}

module.exports=carData
