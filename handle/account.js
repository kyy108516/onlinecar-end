// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var accountSQL=require('../db/accountsql');
// 引入json模块
var json = require('../json/car');

var accountData={
    queryreceivable: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=accountSQL.queryreceivable
            // if (data.id!=0){
            //     sql+=" and id="+data.id
            // }else if (data.id==="0"){
            //     json(res,undefined)
            //     return
            // }
            if (data.contract_id!=''){
                sql+=" and contract_id like"+"'%"+data.contract_id+"%'"
            }
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
    querypractical: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            // var data=req.body
            // var sql=maintainanceSQL.query
            // if (data.id!=0){
            //     sql+=" and id="+data.id
            // }else if (data.id==="0"){
            //     json(res,undefined)
            //     return
            // }
            // if (data.name!=''){
            //     sql+=" and name="+"'"+data.name+"'"
            // }
            connection.query(accountSQL.querypractical, function (err, result) {
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
    querybill: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=accountSQL.querybill
            if (data.id!=''){
                sql+=" and id like"+"'%"+data.id+"%'"
            }
            if (data.state!=''){
                sql+=" and state="+"'"+data.state+"'"
            }
            if (data.type!=''){
                sql+=" and type="+"'"+data.type+"'"
            }
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
    querydetail: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            // var data=req.body
            // var sql=maintainanceSQL.query
            // if (data.id!=0){
            //     sql+=" and id="+data.id
            // }else if (data.id==="0"){
            //     json(res,undefined)
            //     return
            // }
            // if (data.name!=''){
            //     sql+=" and name="+"'"+data.name+"'"
            // }
            connection.query(accountSQL.querydetail, function (err, result) {
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
    addreceivable: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.addreceivable, [param.id,param.contract_id,param.money,param.time,param.type], function (err, result) {
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
    addpractical: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.addpractical, [param.id,param.receivable_id,param.money,param.time,param.type], function (err, result) {
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
    updatereceivable: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.updatereceivable, [param.money,param.state,param.id], function (err, result) {
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
    adddetail: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.adddetail, [param.id,param.type,param.state,param.money,param.time], function (err, result) {
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
    addbill: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.addbill, [param.id,param.type,param.money], function (err, result) {
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
    updatebill: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(accountSQL.updatebill, [param.time,param.state,param.id], function (err, result) {
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

module.exports=accountData