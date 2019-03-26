// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var driverSQL=require('../db/driversql');
// 引入json模块
var json = require('../json/car');

var driverData={
    query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=driverSQL.query
            if (data.id!=0){
                sql+=" and id="+data.id
            }else if (data.id==="0"){
                json(res,undefined)
                return
            }
            if (data.name!=''){
                sql+=" and name like"+"'%"+data.name+"%'"
            }
            if(data.sex !=''){
                sql+=" and sex="+"'"+data.sex+"'"
            }
            if(data.phone!=''){
                sql+=" and phone like"+"'%"+data.phone+"%'"
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
    driverexist: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=driverSQL.driverexist
            if (data.id!=0){
                sql+=" and id !="+data.id
            }else if (data.id==="0"){
                json(res,undefined)
                return
            }
            if(data.phone!=''){
                sql+=" and phone like"+"'%"+data.phone+"%'"
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
            connection.query(driverSQL.delete,param.id,function(err, result) {
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
            connection.query(driverSQL.add, [param.name,param.sex,param.phone], function (err, result) {
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
        if (param.name == null || param.id == null) {
            json(res, undefined);
            return;
        }
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(driverSQL.update, [param.name,param.sex,param.phone,param.id], function (err, result) {
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
    updatestate: function (req, res, next) {
        var param = req.query || req.params;
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(driverSQL.updatestate, [param.state,param.id], function (err, result) {
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
    finishcontract: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(driverSQL.finishcontract, [param.phone], function (err, result) {
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

module.exports=driverData