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
                sql+=" and license like"+"'%"+data.license+"%'"
            }
            if(data.vin !=''){
                sql+=" and vin like"+"'%"+data.vin+"%'"
            }
            if(data.model!=''){
                sql+=" and model="+"'"+data.model+"'"
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
    updatestate: function (req, res, next) {
        var param = req.query || req.params;
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.updatestate, [param.state,param.id], function (err, result) {
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
    queryinsurance: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到车辆表
            var param = req.query || req.params;
            connection.query(carSQL.queryinsurance,param.id,function (err, result) {
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
    updateinsurance: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.updateinsurance, [param.id,param.partner_id,param.start_time,param.end_time,param.money,param.original_id], function (err, result) {
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
    querypartner: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到车辆表
            var param = req.query || req.params;
            connection.query(carSQL.querypartner,param.type,function (err, result) {
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
    partner: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var data=req.body
            var sql=carSQL.partner
            if (data.id!=0){
                sql+=" and id="+data.id
            }else if (data.id==="0"){
                json(res,undefined)
                return
            }
            if (data.company_name!=''){
                sql+=" and company_name like"+"'%"+data.company_name+"%'"
            }
            if(data.type!=''){
                sql+=" and type="+"'"+data.type+"'"
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
    addinsurance: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.addinsurance, [param.id,param.type,param.partner_id,param.car_id,param.start_time,param.end_time,param.money], function (err, result) {
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
    deletepartner: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.deletepartner, [param.id], function (err, result) {
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
    addpartner: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.addpartner, [param.company_name,param.type], function (err, result) {
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
    updatepartner: function (req, res, next) {
        var param = req.query || req.params;
        if (param.company_name == null || param.id == null) {
            json(res, undefined);
            return;
        }
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.updatepartner, [param.company_name,param.type,param.id], function (err, result) {
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
    queryviolation: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到车辆表
            var data=req.body
            var sql=carSQL.queryviolation
            if (data.license!=''){
                sql+=" and a.car_id="+"'"+data.license+"'"
            }
            if(data.name !=''){
                sql+=" and a.driver_id="+"'"+data.name+"'"
            }
            if(data.state!=''){
                sql+=" and a.state="+"'"+data.state+"'"
            }
            if(data.contract!=''){
                sql+=" and a.contract_id="+"'"+data.contract+"'"
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
    updateviolation: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.updateviolation, [param.id], function (err, result) {
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
    addviolation: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query(carSQL.addviolation, [param.car_id,param.happen_site,param.happen_time,param.money,param.score,param.driver_id,param.contract_id], function (err, result) {
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
    queryinsuranceremind: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            //建立连接 得到车辆表
            var data=req.body
            var sql=carSQL.queryinsuranceremind
            if (data.day!=''){
                sql+="  TO_DAYS(end_time)-TO_DAYS(NOW())<="+data.day
            }
            // if(data.name !=''){
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
}

module.exports=carData
