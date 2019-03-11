// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var contractSQL=require('../db/contractsql');
// 引入json模块
var json = require('../json/car');

var contractData={
    query: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到合同表
            var data=req.body
            var sql=contractSQL.query
            if (data.id!=''){
                sql+=" and a.id like"+"'%"+data.id+"%'"
            }
            if (data.license!=''){
                sql+=" and a.car_id="+"'"+data.license+"'"
            }
            if(data.type !=''){
                sql+=" and a.type="+"'"+data.type+"'"
            }
            if(data.name!=''){
                sql+=" and a.driver_id="+"'"+data.name+"'"
            }
            if(data.state!=''){
                sql+=" and a.state="+"'"+data.state+"'"
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
    queryexpire: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到合同表
            // var data=req.body
            var sql=contractSQL.query
            // if (data.id!=''){
            //     sql+=" and a.id like"+"'%"+data.id+"%'"
            // }
            // if (data.license!=''){
            //     sql+=" and a.car_id="+"'"+data.license+"'"
            // }
            // if(data.type !=''){
            //     sql+=" and a.type="+"'"+data.type+"'"
            // }
            // if(data.name!=''){
            //     sql+=" and a.driver_id="+"'"+data.name+"'"
            // }
            // if(data.state!=''){
            //     sql+=" and a.state="+"'"+data.state+"'"
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
    delete:function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取前台页面传过来的参数
            var param=req.query||req.params;
            connection.query(contractSQL.delete,param.id,function(err, result) {
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
            console.log(param.start_time)
            connection.query(contractSQL.add, [param.id,param.type,param.car_id,param.driver_id,param.start_time,param.end_time], function (err, result) {
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
            connection.query(contractSQL.additem, [param.id,param.type,param.period,param.money,param.time], function (err, result) {
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
    updatestate: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(contractSQL.updatestate, [param.state,param.id], function (err, result) {
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
    queryitem: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到合同表
            var data=req.body
            var sql=contractSQL.queryitem
            if (data.id!=''){
                sql+=" and a.id="+"'"+data.id+"'"
            }
            // if(data.state!=''){
            //     sql+=" and a.state="+"'"+data.state+"'"
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
    queryexpire: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到合同表
            // var data=req.body
            var sql=contractSQL.queryexpire
            // if (data.id!=''){
            //     sql+=" and a.id like"+"'%"+data.id+"%'"
            // }
            // if (data.license!=''){
            //     sql+=" and a.car_id="+"'"+data.license+"'"
            // }
            // if(data.type !=''){
            //     sql+=" and a.type="+"'"+data.type+"'"
            // }
            // if(data.name!=''){
            //     sql+=" and a.driver_id="+"'"+data.name+"'"
            // }
            // if(data.state!=''){
            //     sql+=" and a.state="+"'"+data.state+"'"
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
    querydetain: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到合同表
            var data=req.body
            var sql=contractSQL.querydetain
            if (data.license!=''){
                sql+=" and b.car_id="+"'"+data.license+"'"
            }
            if(data.name!=''){
                sql+=" and b.driver_id="+"'"+data.name+"'"
            }
            if(data.state!=''){
                sql+=" and a.state="+"'"+data.state+"'"
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
    updatedetain: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(contractSQL.updatedetain, [param.state,param.id], function (err, result) {
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
    adddetain: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(contractSQL.adddetain, [param.contract_id], function (err, result) {
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
    detainaccident: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(contractSQL.detainaccident, [param.contract_id], function (err, result) {
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
    detainviolation: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(contractSQL.detainviolation, [param.contract_id], function (err, result) {
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

module.exports=contractData