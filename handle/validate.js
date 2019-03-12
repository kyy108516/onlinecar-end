// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var validateSQL=require('../db/validatesql');
// 引入json模块
var json = require('../json/car');

var validateData={
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(validateSQL.add, [param.contract_id,param.time,param.type], function (err, result) {
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
    additem: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(validateSQL.additem, [param.id,param.description,param.money], function (err, result) {
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
    query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=validateSQL.query
            if (data.id!=0){
                sql+=" and a.id="+data.id
            }else if (data.id==="0"){
                json(res,undefined)
                return
            }
            if (data.state!=''){
                sql+=" and a.state="+"'"+data.state+"'"
            }
            if (data.type!=''){
                sql+=" and a.type="+"'"+data.type+"'"
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
    updatestate: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(validateSQL.updatestate, [param.state,param.id], function (err, result) {
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

module.exports=validateData