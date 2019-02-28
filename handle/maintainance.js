// 引入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var dbConfig = require('../db/DBConfig');
// 引入连接池配置
var pool=mysql.createPool(dbConfig.mysql);
// 引入SQL模块
var maintainanceSQL=require('../db/maintainancesql');
// 引入json模块
var json = require('../json/car');

var maintainanceData={
    query: function (req, res, next) {
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
            // if(data.sex !=''){
            //     sql+=" and sex="+"'"+data.sex+"'"
            // }
            // if(data.phone!=''){
            //     sql+=" and phone="+"'"+data.phone+"'"
            // }
            // if(data.state!=''){
            //     sql+=" and state="+"'"+data.state+"'"
            // }
            connection.query(maintainanceSQL.query, function (err, result) {
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

module.exports=maintainanceData