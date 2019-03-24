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
    adduser: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(userSQL.adduser, [param.username,param.password,param.role_id], function (err, result) {
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
    addrole: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(userSQL.addrole, [param.id,param.name,param.description], function (err, result) {
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
    addrolemenu: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(userSQL.addrolemenu, [param.role_id,param.menu_id], function (err, result) {
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
            var sql=userSQL.query
            if (data.username!=''){
                sql+=" and a.username like"+"'%"+data.username+"%'"
            }
            if (data.name!=''){
                sql+=" and b.id like"+"'%"+data.name+"%'"
            }
            if (data.type!=''){
                sql+=" and a.type ="+"'"+data.type+"'"
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
    queryrole: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=userSQL.queryrole
            if (data.id!=''){
                sql+=" and id like"+"'%"+data.id+"%'"
            }
            if (data.name!=''){
                sql+=" and name like"+"'%"+data.name+"%'"
            }
            if (data.state!=''){
                sql+=" and state ="+"'"+data.state+"'"
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
    updateuser: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(userSQL.updateuser, [param.password,param.role_id,param.username], function (err, result) {
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
    deleteuser:function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取前台页面传过来的参数
            var param=req.query||req.params;
            connection.query(userSQL.deleteuser,param.username,function(err, result) {
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
    queryrolemenu: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=userSQL.queryrolemenu
            if (data.username!=''){
                sql+=" and d.username ="+"'"+data.username+"'"
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
}

module.exports=userData