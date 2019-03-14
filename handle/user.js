// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var userSQL=require('../db/usersql');
// 引入json模块
var json = require('../json/car');

var userData={
    // add: function (req, res, next) {
    //     pool.getConnection(function (err, connection) {
    //         //获取前台页面传过来的参数
    //         var param = req.query || req.params;
    //         connection.query(validateSQL.add, [param.contract_id,param.time,param.type], function (err, result) {
    //             if (result) {
    //                 result = 'add'
    //             } else {
    //                 result = undefined;
    //             }
    //             // 以json形式，把操作结果返回给前台页面
    //             json(res, result);
    //         });
    //         // 释放连接
    //         connection.release();
    //     })
    // },
    queryfunction: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryfunction, function (err, result) {
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
    updatefunction: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(userSQL.updatefunction, [param.insurance,param.contract,param.violation,param.accident], function (err, result) {
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
    // queryitem: function (req, res, next) {
    //     pool.getConnection(function (err, connection) {
    //         var data=req.body
    //         var sql=validateSQL.queryitem
    //         if (data.contract_id!=''){
    //             sql+=" and b.contract_id="+"'"+data.contract_id+"'"
    //         }
    //         console.log(sql)
    //         connection.query(sql, function (err, result) {
    //             if (result != '') {
    //                 var _result = result;
    //                 result = {
    //                     result: 'select',
    //                     data: _result
    //                 }
    //             } else {
    //                 result = undefined;
    //             }
    //             // 以json形式，把操作结果返回给前台页面
    //             json(res, result);
    //         });
    //         // 释放连接
    //         connection.release();
    //     })
    // },
}

module.exports=userData