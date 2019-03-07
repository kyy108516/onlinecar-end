// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool = mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var maintainanceSQL = require('../db/maintainancesql');
// 引入json模块
var json = require('../json/car');

var maintainanceData = {
    query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data = req.body
            var sql = maintainanceSQL.query
            if (data.id != 0) {
                sql += " and a.id like '%" + data.id + "%'"
            } else if (data.id === "0") {
                json(res, undefined)
                return
            }
            if (data.license != '') {
                sql += " and c.id=" + "'" + data.license + "'"
            }
            if (data.state != '') {
                sql += " and a.state=" + "'" + data.state + "'"
            }
            // if(data.state!=''){
            //     sql+=" and state="+"'"+data.state+"'"
            // }
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
    add: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(maintainanceSQL.add, [param.id, param.type, param.money, param.send_time, param.season, param.partner_id, param.car_id], function (err, result) {
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
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(maintainanceSQL.update, [param.id], function (err, result) {
                if (result.affectedRows > 0) {
                    var _result = result;
                    result = 'update'
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

module.exports = maintainanceData